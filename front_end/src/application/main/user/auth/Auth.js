import React, { useState } from "react";

import img from "../../../../../public/images/earth.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export const Auth = () => {
  let location = useLocation();
  return (
    <div className="w-full h-full ">
      <div className=" w-1/2 absolute pl-[50px] top-0 bottom-0  h-full">
        <div className="mb-20 text-right">
          <h1 className=" w-full font-mono mt-[100px] text-[30px] font-[200] text-sky-500">
            Register With Us, Get Vaccinated.
          </h1>

          <div className=" font-[100] text-sm ">
            {location.pathname == "/auth/create" ? (
              <div>
                Already have an Account?{" "}
                <NavLink className="text-green-600" to="/auth/login">
                  Login
                </NavLink>{" "}
                Here!
              </div>
            ) : (
              <div>
                Do Not Have an Account?{" "}
                <NavLink className="text-green-600" to="/auth/create">
                  Register
                </NavLink>{" "}
                Here!
              </div>
            )}
          </div>
        </div>
        <div>
          <img className="py-2 object-center -z-10  h-full" src={img}></img>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
