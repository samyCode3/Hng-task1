const express = require("express")

const router = express()

router.get("/hng-task", (res, req) => {
    res.send("hello")
})


module.exports = router