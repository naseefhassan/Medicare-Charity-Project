import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Account() {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [amount, setAmount] = useState(0); // State to hold the payment amount

  useEffect(() => {
    const createPayment = async () => {
      try {
        // Make a POST request to create a payment with the specified amount
        const response = await axiosInstance.post("/user/donate", {
          amount: amount
        });
        setOrder(response);
        // Handle payment response and open Razorpay modal
        const options = {
          key: "rzp_test_j1Jya15nBJEWe2",
          amount: amount * 100, // Razorpay expects amount in smallest currency unit (e.g., paisa)
          currency: "INR",
          name: "Medicare",
          description: "Test Payment",
          order_id: response.data.id,
          handler: function (response) {
            handlePaymentSuccess(response);
            alert("Payment successful!");
          },
          prefill: {
            name: "Naseef",
            email: "typetonaseef@gmail.com",
            contact: "7994360889",
          },
          notes: {
            address: "Address",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error(error);
      }
    };
    createPayment();
  }, []);

  const handlePaymentSuccess = async (response) => {
    try {
      // Send payment details to backend for storage
      await axiosInstance.post("/user/save_payment", {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount: amount,
        status: "success",
      });
      // Optionally, you can update the UI to reflect the successful payment
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };

  // Function to handle amount change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Function to handle payment initiation
  const initiatePayment = (amount) => {
    // Prevent navigation when initiating payment
    if (amount > 0) {
      setAmount(amount); // This line is optional, just to ensure the latest amount is set
    } else {
      alert("Please enter a valid amount");
      toast.error('Please enter a valid amount')

    }
  };

  return (
    <div>
      {/* Input field for entering the payment amount */}
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      {/* Button to initiate payment */}
      <button className="bg-orange-500 rounded-md p-3" onClick={() => initiatePayment(amount)}>Initiate Payment</button>
      {/* Redirect back to home page after initiating payment */}
      {order && navigate("/")}
      <ToastContainer style={{ width: "300px" }} />
    </div>
  );
}

export default Account;
