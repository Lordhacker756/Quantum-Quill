import React from "react";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SideBar />
      <div className="md:w-3/4 w-full">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default layout;
