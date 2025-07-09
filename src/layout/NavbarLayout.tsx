import { Outlet } from "react-router-dom";
import { Navbar } from "../components/common/system/navbar/Navbar";

export const NavbarLayout = () => {
  return (
    <div className="h-full">
      <div className="h-auto pb-25 bg-white">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};
