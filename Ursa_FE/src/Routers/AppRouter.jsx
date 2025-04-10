import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 路徑

// layout
import MainLayout from "../layouts/MainLayout";

// pages
import Home from "../pages/Home";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>

    {/* 404 頁面 */}
    {/* <Route path="*" element={<NotFoundPage />} /> */}
  </Routes>
);

export default AppRouter;
