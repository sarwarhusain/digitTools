import { FaCartShopping } from "react-icons/fa6";

const NavBar = ({ selectProducts }) => {
  return (
    <div className="navbar bg-base-100 container mx-auto px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <a className="btn  rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none font-bold">
          DigitTools
        </a>
      </div>

      <div className="navbar-center hidden lg:flex gap-6">
        <a className="hover:text-primary cursor-pointer">Products</a>
        <a className="hover:text-primary cursor-pointer">Features</a>
        <a className="hover:text-primary cursor-pointer">Pricing</a>
        <a className="hover:text-primary cursor-pointer">Testimonials</a>
        <a className="hover:text-primary cursor-pointer">FAQ</a>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost hidden sm:inline-flex">Login</button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaCartShopping size={20} />
            <span className="badge badge-xs badge-primary indicator-item">
              {selectProducts.length}
            </span>
          </div>
        </button>

        <button className="btn font-bold rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
