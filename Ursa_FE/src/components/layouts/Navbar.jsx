import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("title"); // 預設查書名

  const searchBook = (evt) => {
    if (evt.key === "Enter" && search.trim()) {
      // 導向 searchBook 頁面，並把搜尋字串帶入 query string
      navigate(
        `/searchBooks?query=${encodeURIComponent(
          search.trim()
        )}&type=${searchType}`
      );
    }
  };
  return (
    <header className="w-full bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* 電腦版 Navbar */}
        <nav className="hidden md:flex items-center justify-between w-full h-16 gap-x-6">
          {/* 左邊：Logo + link */}
          <div className="flex items-center md:gap-x-4 lg:gap-x-6 flex-shrink-0">
            <a href="/" className="h-full flex items-center">
              <img
                src="/images/logo/headerLogo.png"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </a>
            <a href="/" className="text-white text-md">
              成為隅藏家
            </a>
          </div>

          {/* 中間：搜尋欄 */}
          <div className="flex flex-grow max-w-2xl">
            <div className="relative w-full">
              <i className="absolute left-3 top-1/2 -translate-y-1/2 bi bi-search text-gray-500"></i>
              <input
                type="text"
                placeholder="輸入作者、書名、ISBN"
                className="w-full pl-10 pr-4 py-2 text-base rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
            </div>
            {/* 搜尋選項：書名/作者/ISBN */}
            <select
              className="ml-4 p-2 rounded"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="title">書名</option>
              <option value="author">作者</option>
              <option value="isbn">ISBN</option>
            </select>
          </div>

          {/* 右邊：登入註冊 */}
          <div className="flex items-center gap-x-4 flex-shrink-0">
            <Button variant="primary">登入</Button>
            <Button variant="primary">註冊</Button>
          </div>
        </nav>

        {/* 手機版：漢堡選單 */}
        <div className="md:hidden flex items-center gap-x-2">
          <MobileMenu />
          <a href="/" className="h-full flex items-center">
            <img
              src="/images/logo/headerLogo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <div className="flex-grow max-w-2xl">
            <div className="relative w-full">
              <i className="absolute left-3 top-1/2 -translate-y-1/2 bi bi-search text-gray-500"></i>
              <input
                type="text"
                placeholder="輸入作者、書名、ISBN"
                className="w-full pl-10 pr-4 py-2 text-base rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="title">書名</option>
                <option value="author">作者</option>
                <option value="isbn">ISBN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="!h-8 !w-8 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white">
        <DialogTitle>
          <div className="sr-only">手機側邊選單</div>
        </DialogTitle>
        <div className="flex flex-col space-y-4 mt-4">
          <a href="/" className="h-full flex items-center">
            <img
              src="/images/logo/Mobilelogo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <a href="/">成為隅藏家</a>
          <hr />
          <Button variant="outline">登入</Button>
          <Button>註冊</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
