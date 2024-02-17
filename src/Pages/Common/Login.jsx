import { useEffect, useState } from "react";
import "../../../public/Signup/Signup.css";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
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
  // State variables

  const [err, errmsg] = useState("");
  const [loginmsg, setLoginmsg] = useState("");

  const [formData, setFormData] = useState({
    username: "naseef",
    email: "naseef@gmail.com",
    password: "Naseef@2002",
    confirmPassword: "Naseef@2002",
  });

  // Event handlers
  const handlechage = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    errmsg(""); // Clear error message on input change
  };

  function Validation() {
    const { password, confirmPassword } = formData;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordValid = regex.test(password);
    const confirmPasswordValid = password === confirmPassword;

    if (!passwordValid) {
      errmsg(
        "Password must contain 8 characters with uppercase, lowercase, special character, and number."
      );
      return false;
    } else if (password !== confirmPassword) {
      errmsg("Passwords do not match.");
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Validation(e)) {
      try {
        // Submit form data
        const res = await axiosInstance.post("/signupPost", formData);
        const jwtToken = res.data.token;
        localStorage.setItem("jwtToken", jwtToken);
        

        navigate('/')
      } catch (error) {
        if(error.response && error.response.data.message==="User already exists with this email."){
          console.log(error.response.data.message);
          errmsg("User already exists.Please Login")
        }else{
          
          errmsg("Signup error, Please try again");
        }
      }
    }
  };

  // Loginform
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handlelogin = async (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setLoginmsg("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/LoginPost", loginFormData);
      const {role}=res.data
      console.log(role);
      if(role === 'user'){
        navigate('/')
      }else{
        
        navigate('/admin/adminhome')
      }
      

    } catch (error) {
      console.error("Login error", error);
      setLoginmsg("Invalid email or password. Please try again.");
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
          <form onSubmit={handleLoginSubmit}>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={loginFormData.email}
                onChange={handlelogin}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handlelogin}
              />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <p className="text-[10px] text-center text-red-600">{loginmsg}</p>
            <button type="submit" className="submit custom-class-name">
              Login
            </button>
          </form>
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
          
            <div className="form sign-up ">
              <h2>Create your Account</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    required
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handlechage}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handlechage}
                  />
                </label>
                <label>
                  <span>Password</span>
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handlechage}
                  />
                </label>
                <label>
                  <span>Confirm Password</span>
                  <input
                    required
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
            </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Login;
