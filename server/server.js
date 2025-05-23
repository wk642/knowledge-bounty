import express, { json } from "express";
import cors from "cors";
import pgPromise from "pg-promise";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// connect to database
const pgp = pgPromise();
const db = pgp("postgres://tpl622_6@localhost:5432/tornado");

// Testing to make sure it connects to back end
app.get("/test-connection", function(req, res) {
  res.json("Welcome! back end to TORNADO is connected");
});

// GET - all posts
app.get("/posts", async function(req, res) {
  try {
    const posts = await db.any("SELECT id, title, content, category, subcategory, bookmarked FROM posts");
    res.json(posts);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// add posts
app.post("/add/posts", async (req, res) => {
  const { title, content, category, subcategory } = req.body;
  try {
    await db.none(
      "INSERT INTO posts (title, content, category, subcategory) VALUES ($1, $2, $3, $4)",
      [title, content, category, subcategory]
    );

    // console.log('Post created successfully:', { title, content, category, subcategory });
    res.status(201).json({ message: "Post created" });
  }
  catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// delete posts
app.delete("/delete/posts/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const result = await db.result("DELETE FROM posts WHERE id = $1", [postId]);
    if (result.rowCount > 0) {
      res.json({ message: `Post with ID ${postId} deleted successfully` });
    }
    else {
      res.status(404).json({ error: `Post with ID ${postId} not found` });
    }
  }
  catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// bookmark post - PUT
app.put("/posts/:id/bookmark", async (req, res) => {
  const postId = req.params.id;
  const { bookmarked } = req.body;

  try {
    const result = await db.oneOrNone("UPDATE posts SET bookmarked = $1 WHERE id = $2 RETURNING id, title, content, category, subcategory, bookmarked", [bookmarked, postId]);

    if (result) {
      res.json(result);
    }
    else {
      res.status(404).json({ error: `Post with ID ${postId} not found` });
    }
  }
  catch (error) {
    console.error("Error updating bookmark:", error);
    res.status(500).json({ error: "Failed to update bookmark status" });
  }
});

// delete posts
app.delete("/delete/posts/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const result = await db.result("DELETE FROM posts WHERE id = $1", [postId]);
    if (result.rowCount > 0) {
      res.json({ message: `Post with ID ${postId} deleted successfully` });
    }
    else {
      res.status(404).json({ error: `Post with ID ${postId} not found` });
    }
  }
  catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// bookmark post - PUT
app.put("/posts/:id/bookmark", async (req, res) => {
  const postId = req.params.id;
  const { bookmarked } = req.body;

  try {
    const result = await db.oneOrNone("UPDATE posts SET bookmarked = $1 WHERE id = $2 RETURNING id, title, content, category, subcategory, bookmarked", [bookmarked, postId]);

    if (result) {
      res.json(result);
    }
    else {
      res.status(404).json({ error: `Post with ID ${postId} not found` });
    }
  }
  catch (error) {
    console.error("Error updating bookmark:", error);
    res.status(500).json({ error: "Failed to update bookmark status" });
  }
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});
