import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const [order, Setorder] = useState(null);
  useEffect(() => {
    const createPayment = async () => {
      try {
        const response = await axiosInstance.post("/user/payment");
        console.log(response);
        Setorder(response);
        const options = {
          key: "rzp_test_j1Jya15nBJEWe2",
          amount: 500,
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
    console.log(response, "gytffyt");
    try {
      // Send payment details to backend for storage
      await axiosInstance.post("/user/save_payment", {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        // amount: order.data.amount,
        amount: response.razorpay_signature,
        status: "success", 
      });
      // Optionally, you can update the UI to reflect the successful payment
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };
  return <>{navigate("/")}</>;
}

export default Account;
