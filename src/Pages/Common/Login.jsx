import React, { useEffect } from 'react';
import '../../../public/Signup/Signup.css'

function Login() {
    useEffect(() => {
        const imgBtn = document.querySelector('.img__btn');

        const handleClick = () => {
            const cont = document.querySelector('.cont');
            cont.classList.toggle('s--signup');
        };

        imgBtn.addEventListener('click', handleClick);

        return () => {
            imgBtn.removeEventListener('click', handleClick);
        };
    }, []);
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
                        <input type="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit custom-class-name">Login</button>
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
                        <label>
                            <span>Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <button type="button" className="submit custom-class-name">Sign Up</button>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Login;
