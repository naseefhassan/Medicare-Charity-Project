/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "../../../public/Signup/Signup.css";
import axiosInstance from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Jwt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // eslint-disable-next-line no-unused-vars
    const confirmPasswordValid = password === confirmPassword;

    if (!passwordValid) {
      errmsg(
        "Password must contain 8 characters with uppercase, lowercase, special character, and number."
      );
      toast.error("Enter Valid Characters");
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
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
        dispatch(setToken(jwtToken));
        navigate("/");
      } catch (error) {
        if (
          error.response &&
          error.response.data.message === "User already exists with this email."
        ) {
          errmsg("User already exists.Please Login");
        } else {
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
      const { role } = res.data;

      const jwtToken = res.data.token;
      localStorage.setItem("jwtToken", jwtToken);
      dispatch(setToken(jwtToken));

      if (role === "user") {
        navigate("/");
      } else {
        toast.success("Welcome to Medicare");
        navigate("/admin/adminhome");
      }
    } catch (error) {
      setLoginmsg("Invalid email or password. Please try again.");
      toast.error("Invalid email or password");
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
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password type
                  name="password"
                  value={loginFormData.password}
                  onChange={handlelogin}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                   
                  ) : (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                  )}
                </svg>
              </div>
            </label>

            <Link to={"/forgotPassword"}>
              <p className="cursor-pointer forgot-pass">Forgot password?</p>
            </Link>
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
              <label className="block">
                <span className="text-gray-700">Password</span>
                <div className="relative">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handlechage}
                    className="block w-full pl-10 pr-4  border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    )}
                  </svg>
                </div>
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
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
