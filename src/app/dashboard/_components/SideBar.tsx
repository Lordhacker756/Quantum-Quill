"use client";
import React from "react";
import Image from "next/image";
import { HistoryIcon, HomeIcon, ReceiptText, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const menuItems = [
    {
      name: "Home",
      icon: <HomeIcon size={18} />,
      href: "/dashboard",
    },
    {
      name: "History",
      icon: <HistoryIcon size={18} />,
      href: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: <ReceiptText size={18} />,
      href: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: <SettingsIcon size={18} />,
      href: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  const isActive = (href: string) => {
    return path === href;
  };

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className={`flex items-center justify-center border-2 rounded-sm p-2 border-black my-2 w-60 gap-2  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer ${
          isActive(item.href) ? "bg-black text-white" : ""
        }`}
      >
        <div className="flex items-center justify-start gap-2 w-[40%] ">
          {item.icon}
          {item.name}
        </div>
      </Link>
    ));
  };

  const renderCreditsProgressBar = () => {
    return (
      <div className="w-full self-end">
        <Progress value={33} />
        <p className="text-sm text-gray-500 text-center mt-2">
          Credits Used <span className="font-bold">33/100</span>
        </p>
      </div>
    );
  };

  return (
    <div className="md:w-1/4 hidden md:flex flex-col h-full bg-gray-100 p-4">
      <div className="flex flex-col h-screen">
        {/* Logo and Title */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-20">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Quantum Quill</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-sm text-gray-500 font-bold">
              Revolutionize your content workflow
            </h2>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center justify-center mt-10">
          {renderMenuItems()}
        </div>

        {/* Credits Progress Bar */}
        <div className="mt-auto w-full">{renderCreditsProgressBar()}</div>
      </div>
    </div>
  );
};

export default SideBar;
