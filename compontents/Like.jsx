import React from 'react'

const views = Math.floor(Math.random() * 1000);
const comments = Math.floor(Math.random() * 10);
const likes = Math.floor(Math.random() * 200);

function Like() {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500  cursor-pointer relative  top-1.5 gap-1 right-0  ">
      <div className="flex gap-3 ">
        <span>{views} views</span>
        <span>{comments} comments</span>
      </div>
      <div className="flex items-center gap-2 text-red-500">
        ❤️ {likes}
      </div>
    </div>
  );
}

export default Like;
