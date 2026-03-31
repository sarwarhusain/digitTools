import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <a className="  text-[#9514FA] text-xl ">DigitTools</a>
      </div>
      <div className="navbar-center gap-5">
        <p>Products</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>FAQ!</p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">Login</button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaCartShopping />
            <span className="badge badge-xs badge-primary indicator-item">
              3
            </span>
          </div>
        </button>
        <button className="btn  rounded-full text-[#9514FA]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
