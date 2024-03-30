import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import donationImg from "../../assets/Images/homeDonation.jpg";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";

function Account() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [successOrder, setsuccessOrder] = useState(null);
  const [paymentId, setPaymentId] = useState("");

  const createPayment = async () => {
    try {
      // Make a POST request to create a payment with the specified amount
      const response = await axiosInstance.post("/user/donate", {
        amount: amount,
      });
      const successOrderResponse = response.data.response;
      setsuccessOrder(successOrderResponse);
      // Handle payment response and open Razorpay modal
      const options = {
        key: "rzp_test_j1Jya15nBJEWe2",
        amount: amount * 100, // Razorpay expects amount in smallest currency unit (e.g., paisa)
        currency: "INR",
        name: "Medicare",
        description: "Test Payment",
        order_id: response.data.id,
        handler: function (response) {
          setPaymentId(response);
          toast.success("Payment successful!");
          setAmount("");
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

  useEffect(() => {
    const handlePaymentSuccess = async () => {
      try {
        await axiosInstance.post("/user/save_payment", {
          orderId: successOrder?.id,
          paymentId: paymentId.razorpay_payment_id,
          amount: successOrder?.amount,
          status: "success",
        });
      } catch (error) {
        console.error("Error saving payment:", error);
      }
    };

    if (successOrder !== null && paymentId !== "") {
      handlePaymentSuccess();
    }
  }, [successOrder, paymentId]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Function to handle payment initiation
  const initiatePayment = (amount) => {
    if (amount > 0) {
      setAmount(amount);
      createPayment();
    } else {
      toast.warning("Please enter a valid amount");
    }
  };

  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: `url(${donationImg})` }}
        className="flex bg-no-repeat bg-center min-h-svh   bg-cover justify-stretch px-10 sm:px-20 items-center "
      >
        <div className="flex justify-center w-[250px]  sm:w-1/2 lg:w-1/3 border-2 p-10 h-[200px] bg-gray-50 flex-col items-center space-y-4 rounded-tl-2xl rounded-br-2xl">
          <input
            type="number"
            className="border w-[200px] text-sm border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 appearance-none"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />

          <button
            className="bg-orange-500  text-white rounded-md px-4 py-2 hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            onClick={() => initiatePayment(amount)}
          >
            Donate
          </button>
          {successOrder && navigate("/")}
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Account;
