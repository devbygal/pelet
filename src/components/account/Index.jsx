import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { accountService } from '../_services';
import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";
import { Register } from "./Register";
import { ResetPassword } from "./ResetPassword";
import { VerifyEmail } from "./VerifyEmail";

export const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to home if already logged in
    if (accountService.userValue) {
      navigate("/")
    }
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-3 mt-5">
          <div className="card m-3">
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="verify-email" element={<VerifyEmail />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}