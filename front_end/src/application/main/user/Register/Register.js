import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../state/user/userAction";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("USER");

  let userDispatcher = useDispatch();

  const handleSubmit = () => {
    if (username == "") {
      setUsernameError(true);
      return;
    }
    if (password == "" || password.length < 8) {
      setPasswordError(true);
      return;
    }
    if (email == "") {
      setEmailError(true);
      return;
    }
    const user = { username, password, email, phone, role };
    userDispatcher(createUser(user));
  };
  return (
    <div className="w-full flex mt-[20px] items-center justify-end h-full pr-5 ">
      <div className="p-4 pr-[150px]">
        <h1 className="text-right text-5xl mb-10 text-blue-400">Register</h1>
        <form className="flex">
          <table className="w-[350px] h-[200px]">
            <tbody className="">
              <tr className="p-2">
                <td className=" relative">
                  <div className="absolute bottom-1 -left-4">
                    {" "}
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
                      setUsernameError(false);
                      setUsername(e.target.value);
                    }}
                    className="focus:outline-none text-right focus:border-b-sky-300 border-b-[1px] mx-2 w-full p-1 pr-5"
                    type={"text"}
                    placeholder="Username"
                  ></input>
                </td>
              </tr>
              <tr className="text-right">
                <td>
                  <div>
                    <ul>
                      {usernameError ? (
                        <span className="text-red-700">Please Fix Errors!</span>
                      ) : (
                        ""
                      )}
                      <li className="px-2 font-[200] text-[12px]">
                        <span>Your UserId must be Unique.</span>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="p-2">
                <td className="relative">
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
                      setPasswordError(false);
                      setPassword(e.target.value);
                    }}
                    className="text-right focus:outline-none focus:border-b-sky-300 border-b-[1px] mx-2 w-full p-1 pr-5"
                    type={"password"}
                    placeholder="Password"
                  ></input>
                </td>
              </tr>
              <tr className="text-right">
                <td>
                  <div>
                    {passwordError ? (
                      <span className="text-red-700">Please Fix Errors!</span>
                    ) : (
                      ""
                    )}
                    <ul className="px-2 font-[200] text-[12px]">
                      <li>Your Password Must be at least 8 characters.</li>
                      <li>Must have one UpperCase</li>
                      <li>One Number</li>
                      <li>Special Character(!, @, # ...)</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="p-2 ">
                <td className="relative">
                  <div className="absolute bottom-5 -left-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="fill-slate-300 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => {
                      setEmailError(false);
                      setEmail(e.target.value);
                    }}
                    className="text-right focus:outline-none focus:border-b-sky-300  border-b-[1px] mx-2 w-full p-1 pr-5 my-4"
                    type={"email"}
                    placeholder="you@example.com"
                  ></input>
                </td>
                <td>
                  {emailError ? (
                    <span className="text-red-700">Please Fix Errors!</span>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
              <tr className="">
                <td className="relative">
                  <div className="absolute bottom-1 -left-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" fill-slate-300 w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-right focus:outline-none focus:border-b-sky-300  border-b-[1px] mx-2 w-full p-1 pr-2 "
                    type={"number"}
                    placeholder="Mobile"
                  ></input>
                </td>
              </tr>
              <tr>
                <td className="text-left text-zinc-500 pt-3">Roles </td>
              </tr>

              <tr>
                <td className="px-2 text-zinc-500 font-[400] text-[15px] flex justify-around my-4">
                  <input
                    type="radio"
                    value={"USER"}
                    checked={role === "USER"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Patient
                  <input
                    type="radio"
                    value={"ADMIN"}
                    checked={role === "ADMIN"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Admin
                  <input
                    type="radio"
                    value={"STAFF"}
                    checked={role === "STAFF"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  Staff
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="w-full text-right mt-4">
          <button
            onClick={handleSubmit}
            className=" bg-sky-300 my-2 px-4 border-2 rounded-lg hover:bg-sky-400 text-white"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};
