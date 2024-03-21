import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { selectToken, setToken } from "../Redux/Jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthGraud = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");

    if (!token && storedToken) {
      // Set the token from local storage to Redux store if it exists
      dispatch(setToken(storedToken));
    }

    if (!token && !storedToken) {
      // If there is no token in Redux store and local storage, redirect to home
      navigate("/");
      toast.error("Please Login 🤗");
      alert("please login");
    }
  }, [token, dispatch, navigate]);

  return (
    <>
      <div>{token && <Outlet />}</div>;
      <ToastContainer />
    </>
  );
};

export default AuthGraud;
