// src/ListPosts.jsx
import React, { useState, useEffect } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // gets all the posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        if (!response.ok) {
          throw new Error('Unable to connect');
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

return (
  <div className="min-h-screen p-8 text-gray-500 bg-gradient-to-t from-blue-500 to-green-100">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-t from-blue-700 to-blue-100">Posts</h1>
        <div className="space-y-6">
            {posts.map(post => (
                <div key={post.id} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative">
                     <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-t from-blue-400 to-blue-100">
                            {post.title}
                        </h2>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Category: {post.category}</span>
                        <span>Subcategory: {post.subcategory}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}