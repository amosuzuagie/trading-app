import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] opacity50">
        <div
          className=" bgBlure absolute  left-1/2  transform 
        -translate-x-1/2 top-1/4  flex flex-col justify-center 
        items-center h-[43rem] w-[37rem] rounded-md z-50 bg-black 
         shadow-2xl shadow-white px-10"
        >
          <h1 className="text-6xl font-bold pb-9">
            <span className="text-orange-300">Mstr</span> Trading
          </h1>
          {location.pathname == "/signup" ? (
            <section className="w-full">
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>Already have an account?</span>
                <Button variant="ghost" onClick={() => navigate("/signin")}>
                  Signin
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-full">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span>Back to login?</span>
                <Button variant="ghost" onClick={() => navigate("/signin")}>
                  Signin
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <SigninForm />
              <div className="flex items-center justify-center">
                <span>Don't have an account?</span>
                <Button variant="ghost" onClick={() => navigate("/signup")}>
                  Signup
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  className="w-full py-5 mt-10"
                  variant="outline"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
