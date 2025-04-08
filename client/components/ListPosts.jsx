import React, { useState, useEffect } from "react";
import PostDetails from "./PostDetails";

export default function ListPosts({ refetchPosts }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // when PostDetail is open:
  const openPostDetail = (post) => {
    setSelectedPost(post);
    document.body.classList.add("overflow-hidden");
  };
  // when PostDetail is closed:
  const closePostDetail = () => {
    setSelectedPost(null);
    document.body.classList.remove("overflow-hidden"); // Use remove instead of add to toggle
  };
  // gets all the posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        if (!response.ok) {
          throw new Error("Unable to connect");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      }
      catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <p>
      Error:
      {error.message}
    </p>
  );

  // handle delete
  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/delete/posts/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete post with ID: ${postId}`);
      }

      // refetch the posts
      if (refetchPosts) {
        refetchPosts();
      }
      else {
        setPosts(posts.filter(post => post.id !== postId));
      }
    }
    catch (err) {
      console.error("Error deleting post:", err);
      setError(err);
    }
  };

  // handle bookmark
  const handleToggleBookmark = async (post) => {
    try {
      const toggleBookmark = await fetch(`http://localhost:5000/posts/${post.id}/bookmark`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookmarked: !post.bookmarked }),
      }).then(res => res.json());

      setPosts(posts.map(p => p.id === toggleBookmark.id ? toggleBookmark : p));
    }
    catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  return (
    <div className="min-h-screen p-8 text-gray-500 bg-gradient-to-t from-slate-900 to-green-900">
      <h1 className="text-9xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-t from-blue-700 to-blue-100">Tornado</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative flex items-center justify-between"
          >
            <div onClick={() => openPostDetail(post)} className="cursor-pointer flex-grow">
              <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-100">
                {post.title}
              </h2>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>
                  Category:
                  {post.category}
                </span>
                <span>
                  Subcategory:
                  {post.subcategory}
                </span>
              </div>
            </div>
            {/* Delete button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeletePost(post.id);
              }}
              className="ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <i className="fa-solid fa-trash"></i>
            </button>

            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleBookmark(post);
              }}
              className={`p-2 rounded ${
                post.bookmarked ? "bg-yellow-500 text-gray-800" : "bg-gray-600 text-yellow-300 hover:bg-yellow-600 hover:text-gray-800"
              } mr-2`}
            >
              <i className={`fa-bookmark ${post.bookmarked ? "fas" : "far"}`}></i>
            </button>

          </div>
        ))}
      </div>
      {selectedPost && <PostDetails post={selectedPost} closePostDetail={closePostDetail} />}
    </div>
  );
}
