import React from "react";
import NavBar from "./components/NavBar";
import ScrollUp from "../components/ScrollUp/ScrollUp";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper" style={{ position: "relative" }}>
      <NavBar />
      <div className="children">{children}</div>
      <ScrollUp />
    </div>
  );
}

export default DefaultLayout;
