import express from "express";

const router = express.Router();

const allPosts = []

router.post("/post", (req, res) => {
    const title = req.body.title
    const body = req.body.description
    res.send("post created");
});

router.get("/post", (req, res) => {
    res.send("post get all");
});

router.get("/post/:postId", (req, res) => {
    res.send("post get single");
});

router.put("/post/:postId", (req, res) => {
    res.send("post edited");
});

router.delete("/post/:postId", (req, res) => {
    res.send("post deleted");
});

export default router;