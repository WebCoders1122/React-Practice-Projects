import React from "react";
import Navbar from "./components/React Router Web/Navbar";
import Footer from "./components/React Router Web/Footer";
// outlet for dymanic changes
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* all components will be render here in place of outlet */}
      <Footer />
    </>
  );
};

export default Layout;
