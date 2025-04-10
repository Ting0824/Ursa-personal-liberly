import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 頂部導覽列 */}
      <Navbar />

      {/* 主體內容區：要能夠撐開容器並把頁面放進來 */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* 底部 */}
      <Footer />
    </div>
  );
}
