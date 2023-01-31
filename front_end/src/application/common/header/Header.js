import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  let user = useSelector((state) => state.userReducer);
  return (
    <div className="header flex items-center fixed top-0 w-full h-12 bg-slate-200 ">
      <div className="header-left font-[700] w-2/3 ">
       
      </div>
      <div className="header-right  w-1/3">
        <div className="header-links flex justify-around items-center h-full mr-2 font-[300]">
          <NavLink className={""} to="/home">
            Home
          </NavLink>
          <NavLink className={"hover:border-b-sky-400"} to="/auth/create">
            Register
          </NavLink>
          <NavLink className={""} to="/auth/login">
            Login
          </NavLink>
          <NavLink className={""} to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};
