import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../../../../public/images/earth.svg";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div
      className="w-full flex mt-[5px] items-center justify-end h-full
        pr-5 "
    >
      <div className="p-4 pr-[150px]">
        <h1 className="text-right text-5xl mb-10 text-blue-400">Login</h1>
        <form className="w-[300px]">
          <div className="mb-10 relative ">
            {" "}
            <div className="absolute bottom-1 -left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="fill-slate-300 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full focus:outline-none text-right focus:border-b-sky-300 border-b-[1px] mx-2 p-1 pr-5"
              type={"text"}
              placeholder="Username"
            ></input>
          </div>
          <div className="relative ">
            <div className="absolute bottom-1 -left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="blue"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="fill-slate-300 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full text-right focus:outline-none focus:border-b-sky-300 border-b-[1px] mx-2  p-1 pr-5"
              type={"password"}
              placeholder="Password"
            ></input>
          </div>
        </form>
        <div className="w-full text-right mt-4">
          <button
            onClick={handleSubmit}
            className=" bg-sky-300 my-2 px-4 border-2 rounded-lg hover:bg-sky-400 text-white"
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};
