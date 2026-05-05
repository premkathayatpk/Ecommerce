import React from "react";
import { NavLink } from "react-router-dom";
import icone from "../assets/icone.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-blue-600 ${isActive ? "text-blue-700 font-semibold" : "text-gray-700"}`;
  return (
    <>
      <header className=" flex justify-between py-2 px-5 items-center shadow-gary-200 shadow-xl">
        <div className="flex items-center">
          <img src={icone} alt="logo" className="h-10 w-auto" />
        </div>

        <nav className="flex justify-around gap-x-5 text-xl font-medium ">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="products" className={linkClass}>
            Product
          </NavLink>
          <NavLink to="about" className={linkClass}>
            About us
          </NavLink>
          <NavLink to="contact" className={linkClass}>
            Contact us
          </NavLink>
          <NavLink to="cart" className={linkClass}>
            Cart
          </NavLink>
        </nav>
        <div>
          <NavLink to="login" className={linkClass}>
            Login
          </NavLink>
          <NavLink to="register" className={linkClass}>
            Register
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
