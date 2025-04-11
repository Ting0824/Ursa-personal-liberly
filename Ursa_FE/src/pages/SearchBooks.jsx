import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";

export default function SearchBooks() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const type = searchParams.get("type") || "title"; // 預設為 title
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/api/books?q=${query}&type=${type}`
      );
      setBookData(res.data.items || []);
    } catch (err) {
      console.log("API 錯誤：", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, [query, type]);

  return (
    <div className="py-8 px-4 md:px-20 lg:px-40">
      <h2 className="text-xl mb-4">搜尋結果：{query}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
        {bookData?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
