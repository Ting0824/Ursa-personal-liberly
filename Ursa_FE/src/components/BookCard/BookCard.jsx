import React, { Component } from "react";

function BookCard({ book }) {
  console.log(book);

  return (
    <>
      {book.map((item) => {
        return (
          <>
            <div className="border hover:-translate-y-1">
              {/* 書籍圖片 */}
              <a href="">
                <img
                  src="../public/images/test/testbook.png"
                  alt=""
                  className="w-32"
                />
              </a>
              <div className="flex flex-col ">
                {/* 書名 */}
                <p className="text-xl">書名</p>
                {/* 作者 */}
                <a href="">作者</a>
                {/* 出版社 */}
                <a href="">出版社</a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default BookCard;
