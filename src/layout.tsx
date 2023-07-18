import React from "react";
import SideBar from "./components/sideBar";
import TopBar from "./components/topbar";

function Layout({ children }) {
  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
}

export default Layout;
