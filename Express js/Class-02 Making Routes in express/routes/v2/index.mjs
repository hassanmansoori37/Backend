import express from "express";


const router = express.Router();

router.get("/post" , (re , res, next) => {
    res.send("v2 post")
})

router.get("/profile" , (re , res, next) => {
    res.send("v2 profile")
})

router.get("/comment" , (re , res, next) => {
    res.send("v2 comment")
})

export default router