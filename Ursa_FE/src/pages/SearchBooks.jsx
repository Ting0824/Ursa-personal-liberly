import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";

export default function SearchBooks() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:8000/api/books?q=${query}`)
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  }, [query]);

  return (
    <div className="py-8 px-4 md:px-20 lg:px-40">
      <h2 className="text-xl mb-4">搜尋結果：{query}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
        {<BookCard book={bookData} />}
      </div>
    </div>
  );
}
