import React, { useState, useEffect } from "react";

export default function Summarize({ postId, content, handleSummaryReceived }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);

  // summarize
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
      setSummary(data.summary);
      handleSummaryReceived(data.summary);
    }
    catch (err) {
      setError(err.message);
      console.error("Error during summarization:", err);
    }
  };

  useEffect(() => {
    if (summary === null && content) {
      handleSummarize();
    }
  }, [postId, content, summary]);
  // cannot include handleSummaryReceived, it will trigger an infinite loop

  if (loading) {
    return <button disabled>Summarizing...</button>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {summary ?
        (
          <p className="mt-4 text-gray-300 italic">{summary}</p>
        ) :
        (
          <button onClick={handleSummarize} className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Summarize
          </button>
        )}
    </div>
  );
}
