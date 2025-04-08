import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";

export default function PostDetails({ post, closePostDetail }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl relative overflow-y-auto max-h-[80vh]">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-t from-blue-700 to-blue-100">
          {post.title}
        </h2>
        <p className="text-gray-300 mb-6">{post.content}</p>
        <button
          onClick={closePostDetail}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
        >
          <Cross1Icon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
