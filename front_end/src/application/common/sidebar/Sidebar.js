import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar absolute z-10 top-0 bottom-0 w-[250px] bg-slate-200">
      <span className="ml-10 mt-3 flex items-center font-[500] text-xl">
        E-Vac
      </span>
      <div className="mt-10 ml-10">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
};
