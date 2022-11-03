const express = require("express")
const ejs = require("ejs")
const app = express()
const Port = process.env.PORT || 4000
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
  })
  
app.get("/", (req, res) => {
    return res.json({ 
        slackUsername : "samson onifade",
        age: 21,
        backend: true,
        bio: "My name is samson onifade, a backend developer"
      })
})