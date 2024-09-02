import React from "react";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <SignIn />
    </div>
  );
};

export default LoginPage;
