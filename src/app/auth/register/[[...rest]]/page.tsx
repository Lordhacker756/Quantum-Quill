import React from "react";
import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <SignUp />
    </div>
  );
};

export default RegisterPage;
