import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineLogout, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'services', label: 'Services', path: '/dashboard/services', icon: AiOutlineHome },
    { id: 'calendar', label: 'Calendar', path: '/calendar', icon: AiOutlineCalendar },
    { id: 'ecommerce', label: 'E-commerce', path: '/e-commerce', icon: AiOutlineShoppingCart },
  ];

  return (
    <>
      {/* Hamburger Menu Button - MOBILE ONLY */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-sky-500 text-white rounded-md shadow-lg hover:bg-sky-600 transition-colors"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:sticky md:top-0 w-64 bg-sky-500 text-white h-screen transition-transform duration-300 ease-in-out z-40 flex flex-col flex-shrink-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center font-bold text-2xl border-b border-sky-600 flex-shrink-0">
          MyApp
        </div>

        {/* Menu Items - Scrollable if needed */}
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
                    ? 'bg-sky-700 text-white border-r-4 border-white shadow-lg'
                    : 'text-sky-50 hover:bg-sky-600 hover:pl-8 hover:shadow-md'
                }`}
              >
                <Icon size={22} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-sky-600 flex-shrink-0">
          <button className="w-full text-left px-4 py-3 flex items-center gap-3 text-red-200 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md">
            <AiOutlineLogout size={22} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Side;