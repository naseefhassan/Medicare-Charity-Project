// PaymentContext.js
import axiosInstance from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import useRazorpays from "react-razorpay";

const RazorpayContext = createContext();

export const useRazorpay = () => useContext(RazorpayContext);

export const RazorpayProvider = ({ children }) => {
  const [Razorpay] = useRazorpays();
  const [successOrder, setsuccessOrder] = useState(null);
  const [paymentId, setPaymentId] = useState("");

  const createOrder = async (amount) => {
    try {
      const response = await axiosInstance.post(`/user/payment/${amount}`);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const createPayment = async (amount) => {
    try {
      const response = await createOrder(amount);
      const successOrderResponse = response.data.response;
      setsuccessOrder(successOrderResponse);
      const options = {
        key: "rzp_test_j1Jya15nBJEWe2",
        amount: amount * 100,
        currency: "INR",
        name: "Medicare",
        description: "Test Payment",
        order_id: response.data.id,
        handler: function (response) {
          setPaymentId(response);
          // handlePaymentSuccess(response);
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

  useEffect(() => {
    const handlePaymentSuccess = async () => {
      try {
        // Ensure order is defined before accessing its properties
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

  return (
    <RazorpayContext.Provider value={{ createPayment }}>
      {children}
    </RazorpayContext.Provider>
  );
};
