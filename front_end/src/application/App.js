import React from "react";
import * as Router from "react-router-dom";
import "./App.css";
import { Footer } from "./common/footer/Footer";
import { Header } from "./common/header/Header";
import { Login } from "./main/user/login/Login";
import { Register } from "./main/user/Register/Register";
import { Auth } from "./main/user/auth/Auth";
import { Home } from "./main/dashboard/Home";

export const App = () => {
  return (
    <div className="h-full">
      <Router.BrowserRouter>
        <Header />
        <Router.Routes>
          <Router.Route path="/auth/" element={<Auth />}>
            <Router.Route index element={<Login />}></Router.Route>
            <Router.Route path="create" element={<Register />}></Router.Route>
            <Router.Route path="login" element={<Login />}></Router.Route>
          </Router.Route>
          <Router.Route path="/home" element={<Home />}></Router.Route>
        </Router.Routes>
        <Footer />
      </Router.BrowserRouter>
    </div>
  );
};
