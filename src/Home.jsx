import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../compontents/Like";

function Home({ search }) {
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!search) return;

    setLoading(true);

    axios
      .get(`/.netlify/functions/getNews?q=${search}`)
      .then((res) => {
        console.log("News fetched:", res.data);
      
        setNews(res.data?.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setNews([]); 
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-3 rounded shadow animate-pulse">
            <div className="w-full h-40 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!news.length) {
    return <p className="text-center mt-24 text-gray-500">No news found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 mt-24">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <li
            key={index}
            className="border p-3 rounded shadow-lg hover:scale-105"
          >
            <Link to={`/post/${index}`}>
              {item.urlToImage && (
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <p className="font-medium truncate">{item.title}</p>
              <p className="text-sm text-gray-500">
                By {item.author || "Unknown"}
              </p>
              <Like />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
