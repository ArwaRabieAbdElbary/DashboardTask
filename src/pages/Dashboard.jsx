import React from "react";
import Side from "../components/Side";
import HeaderDashboard from "../components/HeaderDashboard";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Side />

      <div className="flex-1 flex flex-col">
        <HeaderDashboard className="h-50 bg-white border-b border-gray-200 flex items-center justify-between px-6"></HeaderDashboard>

        <div className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
