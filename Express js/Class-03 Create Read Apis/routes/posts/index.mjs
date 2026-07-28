import express from "express";

const router = express.Router();

const allPosts = []

router.post("/post", (req, res) => {
    // console.log(req.body);

    if(!req.body.title){
        res.status(400).send({
            message : "title is required"
        })
    }

    if(!req.body.description){
        res.status(400).send({
         message : "description is required"

        })
    }


    const newPost = {
        title : req.body.title,
        description : req.body.description,
        id : new Date().getTime(),

    }

    allPosts.push(newPost)



    // console.log(title);
    // console.log(description);
    

    res.send({
        message : "post created"
    });
});

router.get("/post", (req, res) => {
    res.send({
        message : "all post fetched",
        data : allPosts
    });
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