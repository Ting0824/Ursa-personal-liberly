import React from "react";

function BookCard({ book }) {
  const volumeInfo = book.volumeInfo || {};
  console.log(volumeInfo);

  const { title, authors, publisher, imageLinks } = volumeInfo;

  return (
    <div className="hover:-translate-y-1 px-2 py-3 bg-cardBackground">
      {/* 書籍圖片 */}
      <a href="#">
        <img
          src={imageLinks?.smallThumbnail || "/images/logo/otherbook.png"}
          alt={title}
          className="w-32 h-44 object-contain mx-auto block"
        />
      </a>
      <div className="flex flex-col mt-2">
        {/* 書名 */}
        <p className="text-xl font-semibold truncate mb-2">
          {title || "無標題"}
        </p>
        {/* 作者 */}
        <a href="#" className="text-sm truncate">
          {authors?.join(", ") || "無作者"}
        </a>
        {/* 出版社 */}
        <a href="#" className="text-sm">
          {publisher || "無出版社"}
        </a>
      </div>
    </div>
  );
}

export default BookCard;
