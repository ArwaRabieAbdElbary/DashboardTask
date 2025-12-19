import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-brand.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Destinations", path: "/destinations" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-white/10">
      <nav className="mx-auto  px-20">
        <div className="flex h-16 items-center justify-between">
          <img src={logo} className="h-8" />

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-item"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌙
            </button>

            <Link
              to="/login"
              className="hidden md:block rounded-md bg-sky-500 px-4 py-2 text-[16px] font-semibold text-white hover:bg-blue-500 cursor-pointer"
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden space-y-2 pb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-active-mobile" : "nav-item-mobile"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              className="mt-3 w-full rounded-md bg-sky-500 py-2 text-white cursor-pointer p-3"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
