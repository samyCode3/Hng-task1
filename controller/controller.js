const express = require("express")

const router = express()

router.get("/hng-task", (req, res) => {
    res.send("hello")
})


module.exports = router