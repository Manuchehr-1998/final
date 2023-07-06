import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="pt-20 xs:pt-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
