import React from "react";

function Footer() {
  return (
    <div className="bg-primary text-white text-sm">
      <div className="px-4 md:px-10 lg:px-40 py-5 flex  md:flex-row gap-3 md:gap-x-4 justify-center items-center text-center">
        <a href="/">首頁</a>
        <a href="/">成為隅藏家</a>
        <a href="/">常見問題</a>
        <a href="/">關於我們</a>
        <a href="/">聯絡我們</a>
      </div>
      <hr className="border-white mx-10" />
      <p className="px-4 md:px-10 lg:px-40 py-5 text-center">
        Copyright © 2025 Personal Liberary. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
