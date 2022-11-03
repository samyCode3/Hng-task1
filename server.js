const express = require("express")
const ejs = require("ejs")
const app = express()
const Port = process.env.PORT || 4000
const controller = require("./controller/controller")
app.set("view engine", "ejs")
app.use(express.json())
app.get("/", (req, res) => {
    res.render("index")
  })
  
app.get("/hng-task1", (req, res) => {
    return res.json({ 
        slackUsername : "samson onifade",
        age: 21,
        backend: true,
        bio: "My name is samson onifade, a backend developer"
      })
})

app.use("/", controller)
// app.post("/hng-task2", (req, res) => {

// })
app.listen(Port)