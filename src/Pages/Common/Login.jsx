import React, { useEffect, useState } from "react";
import "../../../public/Signup/Signup.css";
import OTP from "../../Components/OTP/OTP";
import axios from "axios";


function Login() {
  useEffect(() => {
    const imgBtn = document.querySelector(".img__btn");
    const handleClick = () => {
      const cont = document.querySelector(".cont");
      cont.classList.toggle("s--signup");
    };
    imgBtn.addEventListener("click", handleClick);
    return () => {
      imgBtn.removeEventListener("click", handleClick);
    };
  }, []);

  // sigup Validation
  const [err, errmsg] = useState("");
  const [showOtp, setShowOtp]=useState(false)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlechage = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
    errmsg("");
  };

  function Validation() {
    const pass = formData.password;
    const confirmPass = formData.confirmPassword;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const password = regex.test(pass);
    const confirmPassword = regex.test(confirmPass);

    if (password && confirmPassword) {
      errmsg("");
      axios.post("http://localhost:5000/signupPost",formData)
      
    }
    if (!password) {
      errmsg(
        "password must contain 8 character with uppercase, lowercase,special character and number."
      );
    } 
     if (pass !== confirmPass) {
      errmsg("Password doesn't match");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup data submitted", formData);
    Validation()
    if(err===""){
      setShowOtp(true)
    }

  };

  return (
    <>
      <br />
      <br />
      <div className="cont">
        {/* Login */}

        <div className="form sign-in ">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="passord" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit custom-class-name">
            Login
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already have an account, just Login.</h3>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Login</span>
            </div>
          </div>
          {/* Signup */}
          {!showOtp ?( <div className="form sign-up ">
            <h2>Create your Account</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handlechage}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handlechage}
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handlechage}
                />
              </label>
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handlechage}
                />
              </label>
              <p className="text-[10px] text-center text-red-600">{err}</p>
              <button
                type="submit"
                onClick={Validation}
                className="submit custom-class-name"
              >
                Sign Up
              </button>
            </form>
          </div>):
          (<OTP/>)

          }
        </div>
      </div>
    </>
  );
}

export default Login;
