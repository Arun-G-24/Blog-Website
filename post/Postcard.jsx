import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Like from "../compontents/Like";

function PostDetails() {
  const { id } = useParams();
  const location = useLocation();
  const search = location.state?.search || "apple"; 

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`/.netlify/functions/getNews?q=${search}`)
      .then((res) => {
        const articles = res.data?.articles || [];
        const index = Number(id);
        setPost(articles[index] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setPost(null);
        setLoading(false);
      });
  }, [id, search]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-4 mt-24 animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
        <div className="h-64 bg-gray-300 rounded"></div>
      </div>
    );
  }

 
  return (
    <div className="max-w-3xl mx-auto p-4 border relative top-20">
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <p className="text-lg text-gray-500 mt-2">{post?.author || "Unknown"}</p>
      <p className="mt-4 text-lg">{post?.description}</p>
      {post?.urlToImage && (
        <img
          className="max-w-xl mx-auto my-6"
          src={post.urlToImage}
          alt={post.title}
        />
      )}
      <p className="mt-2">{post?.content}</p>
      <p className="text-sm text-gray-500 mt-10 text-right">
        {post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}
      </p>
      <div className="mt-6 flex justify-end">
        <Like />
      </div>
    </div>
  );
}

export default PostDetails;
