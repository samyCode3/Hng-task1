const express = require("express")

const router = express()

router.post("/hng-task", (req, res) => {
    const {x, y, operation_type} = req.body
    res.send(req.body)
})


module.exports = router