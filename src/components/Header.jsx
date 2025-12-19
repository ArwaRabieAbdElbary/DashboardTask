import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
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

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌙
            </button>

            <Link to="/login" className="hidden md:block rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 cursor-pointer">
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden space-y-2 pb-4">
            {navLinks.map(link => (
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

            <Link to="/login" className="mt-2 w-full rounded-md bg-indigo-500 py-2 text-white cursor-pointer">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
