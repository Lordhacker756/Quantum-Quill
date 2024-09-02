import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 w-3/4 md:w-full">
      <div className="flex items-center">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-md p-2 w-72">
          <SearchIcon className="w-4 h-4 mr-2" />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost">Join Premium</Button>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
