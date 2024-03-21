// PaymentContext.js
import axiosInstance from "../api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import useRazorpays from "react-razorpay";

const RazorpayContext = createContext();

export const useRazorpay = () => useContext(RazorpayContext);

export const RazorpayProvider = ({ children }) => {
  const [order, setOrder] = useState("");
  const [Razorpay] = useRazorpays();
  const [successOrder, setsuccessOrder] = useState(null);
  const [paymentId, setPaymentId] = useState('');

  const createOrder = async (amount) => {
    console.log("2", amount);
    try {
      const response = await axiosInstance.post(`/user/payment/${amount}`);
      console.log(response.data);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const createPayment = async (amount) => {
    console.log("1", amount);
    try {
      const response = await createOrder(amount);
      console.log("response of the create order", response.data.response);
      const successOrderResponse = response.data.response;
      setsuccessOrder(successOrderResponse);
      const options = {
        key: "rzp_test_j1Jya15nBJEWe2",
        amount: amount*100,
        currency: "INR",
        name: "Medicare",
        description: "Test Payment",
        order_id: response.data.id,
        handler: function (response) {
          console.log(response,'response of handler');
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
      console.log(amount);
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(order, "order");
useEffect(()=>{
  const handlePaymentSuccess = async () => {
    console.log("3");
    try {
      console.log('success aaan tto naseefee', successOrder);
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

  if(successOrder !== null && paymentId !== ''){
    handlePaymentSuccess();
  }

},[successOrder,paymentId])

  return (
    <RazorpayContext.Provider value={{ createPayment }}>
      {children}
    </RazorpayContext.Provider>
  );
};
