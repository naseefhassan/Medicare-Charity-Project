import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import{selectToken,setToken} from '../Redux/Jwt'

const AuthGraud = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  console.log(token,'kh');

  useEffect(()=>{
    console.log(token,'token');
    if (!token) {
        navigate('/auth')
        if (localStorage.getItem("jwtToken")) {
          const jwttoken = localStorage.getItem("jwtToken");
          dispatch(setToken(jwttoken));
        } else {
          navigate("/auth");
        }
      }
  }, [token])
  return <div>{token && <Outlet/>}</div>;
};

export default AuthGraud;
