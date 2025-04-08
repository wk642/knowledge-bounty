import React, { useState } from "react";

export default function Summarize({ postId, content, onSummary }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/summarize/post/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || `Failed to summarize post (status: ${response.status})`);
      }

      const data = await response.json();
      onSummary(data.summary);
    }
    catch (err) {
      setError(err.message);
      console.error("Error during summarization:", err);
    }
  };

  if (loading) {
    return <button disabled>Summarizing...</button>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <button onClick={handleSummarize} className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Summarize
    </button>
  );
};
