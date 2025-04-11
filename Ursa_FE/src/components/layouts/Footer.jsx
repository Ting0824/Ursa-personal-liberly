import React, { Component } from "react";

function Footer() {
  return (
    <>
      <div className="bg-primary">
        <div className="px-40 py-5 flex gap-x-4 justify-center text-sm">
          <a href="/">首頁</a>
          <a href="/">成為隅藏家</a>
          <a href="/">常見問題</a>
          <a href="/">關於我們</a>
          <a href="/">聯絡我們</a>
        </div>
        <hr />
        <p className="px-40 py-5 flex justify-center text-sm">
          Copyright © 2025 Personal Liberary. All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default Footer;
