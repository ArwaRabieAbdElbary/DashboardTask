import { logout } from "../pages/authectication/FakeAuth";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    logout();
    setLogoutModalOpen(false);
    navigate("/login");
  };

  const cancelLogout = () => {
    setLogoutModalOpen(false);
  };

  const menuItems = [
    {
      id: "services",
      label: "Services",
      path: "/dashboard/services",
      icon: AiOutlineHome,
    },
    {
      id: "calendar",
      label: "Calendar",
      path: "/calendar",
      icon: AiOutlineCalendar,
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      path: "/e-commerce",
      icon: AiOutlineShoppingCart,
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-sky-500 text-white rounded-md shadow-lg hover:bg-sky-600 transition-colors"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:sticky md:top-0 w-64 bg-sky-500 text-white h-screen transition-transform duration-300 ease-in-out z-40 flex flex-col flex-shrink-0`}
      >
        <Link
          to="/"
          className="h-16 flex items-center justify-center font-bold text-2xl border-b border-sky-600 flex-shrink-0"
        >
          MyApp
        </Link>

        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setIsOpen(false);
                  }
                }}
                className={`w-full text-left px-6 py-3 flex items-center gap-3 transition-all duration-200 ${
                  isActive
                    ? "bg-sky-700 text-white border-r-4 border-white shadow-lg"
                    : "text-sky-50 hover:bg-sky-600 hover:pl-8 hover:shadow-md"
                }`}
              >
                <Icon size={22} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sky-600 flex-shrink-0">
          <button
            onClick={handleLogoutClick}
            className="w-full text-left px-4 py-3 flex items-center gap-3 text-red-200 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <AiOutlineLogout size={22} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {logoutModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AiOutlineLogout size={24} className="text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Confirm Logout
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600">
                Are you sure you want to log out? Your current session will be
                terminated.
              </p>
            </div>

            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={cancelLogout}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Side;
