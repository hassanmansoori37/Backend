import express from "express"

const router = express.Router();

router.get("/post" , (re , res, next) => {
    res.send("v1 post")
})

router.get("/profile" , (re , res, next) => {
    res.send("v1 profile")
})

router.get("/comment" , (re , res, next) => {
    res.send("v1 comment")
})

export default router