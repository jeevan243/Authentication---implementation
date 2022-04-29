import { Route, Router, Routes } from "react-router-dom";
import { ForgotPassword } from "./Auth/Forgot";
import { Signin } from "./Auth/Signin";
import { Signup } from "./Auth/Signup";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};
