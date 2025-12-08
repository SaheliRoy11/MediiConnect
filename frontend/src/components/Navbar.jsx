import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); //only when we have a token we are logged in

  return (
    <div className="flex items-center justify-around text-sm py-2 mb-5 bg-primary">
      <img
        src={assets.logo}
        alt="Logo"
        className="w-[280px] h-18 cursor-pointer"
      />

      <ul className="hidden md:flex items-start gap-7 font-medium">
        <NavLink to="/">
          <li className="py-1 text-ice">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-ice w-4/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1 text-ice">DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-ice w-4/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="py-1 text-ice">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-ice w-4/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1 text-ice">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-ice w-4/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div>
        {token ? (
          <div className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full hover:bg-white/10 transition group relative">
            <img
              src={assets.profile_pic}
              alt="User"
              className="w-10 rounded-full object-cover"
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown Menu"
              className="w-4 text-white"
            />

            <div className="absolute top-0 right-0 pt-14 font-medium text-[#4a4a4a] z-10 hidden group-hover:block">
              <div className="bg-[#f9faff] min-w-48 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() =>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg border border-ice text-ice hover:bg-white/10 transition md:flex items-center gap-3 hidden"
          >
            <img src={assets.create_account_icon} className="w-8" />
            <span className="text-base">Login</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
