import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Like from "../compontents/Like";

const API_KEY = "22592cecfd894889ab9551381802071b";

function PostDetails({search}) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  {
  // 
   // if (!post) return <p className="p-4">Loading...</p>;
   if (!post) {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-24 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
      <div className="h-64 bg-gray-300 rounded"></div>
    </div>
  );
}

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: search,
        from:2025-12-30,
        sortBy: "popularity",
        apiKey: API_KEY
      }
    })
    .then(res => setPost(res.data.articles[id]));
  }, [id])
    
//  console.log(res.data.articles);
 
  
  
  ;

 

  return (

    <>
    <div className="max-w-180  mx-auto p-4 flex-0 border-1 relative top-20 z-0">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
    
      <p className="text-lg text-gray-500 mt-2">
        {post.author || "Unknown"}
      </p>
      <p className="mt-4 text-1xl">{post.description}</p>
      
<img className="  flex justify-center max-w-120 m-auto " src={post.
urlToImage
} alt="image description"/>
<p className="mt-2">{post.content
}</p>

<p className="text-lg text-gray-500 mt-10 float-right">{post.
publishedAt}</p>





    <div  className="relative left-40  ">
      <Like  />
    </div>
    </div>
    </>

   
  );
}
}
export default PostDetails