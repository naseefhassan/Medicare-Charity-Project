// PaymentContext.js
import axiosInstance from "../api/axios";
import { createContext, useContext, useState } from "react";
import useRazorpays from "react-razorpay";

const RazorpayContext = createContext();

export const useRazorpay = () => useContext(RazorpayContext);

export const RazorpayProvider = ({ children }) => {
  const [order, setOrder] = useState("");
  const [Razorpay] = useRazorpays();

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
      setOrder(response);
      const options = {
        key: "rzp_test_j1Jya15nBJEWe2",
        amount: amount,
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

  const handlePaymentSuccess = async (response) => {
    console.log(order.data.amount);
    try {
      await axiosInstance.post("/user/save_payment", {
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        amount: order.data.amount,
        status: "success",
      });
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };

  return (
    <RazorpayContext.Provider value={{ createPayment }}>
      {children}
    </RazorpayContext.Provider>
  );
};
