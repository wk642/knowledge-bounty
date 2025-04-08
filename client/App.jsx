import React from "react";
import { useState, useEffect } from "react";
import ListPosts from "./components/ListPosts";
import SideMenu from "./components/SideMenu";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addFormOpen, setAddFormOpen] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    }
    catch (err) {
      setError(err);
      setLoading(false);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const refetchPosts = async () => {
    fetchPosts();
  };

  const openAddForm = () => {
    setAddFormOpen(true);
  };

  const closeAddForm = () => {
    setAddFormOpen(false);
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return (
    <p>
      Error:
      {error.message}
    </p>
  );

  return (
    <>
      <div className="flex">
        <SideMenu openAddForm={openAddForm} refetchPosts={refetchPosts} />
        <div className="flex-1">
          <ListPosts posts={posts} />
        </div>
      </div>
      {addFormOpen && <AddForm closeAddForm={closeAddForm} refetchPosts={refetchPosts} />}
    </>
  );
}
