const express = require("express")
const ejs = require("ejs")
const app = express()
const Port = process.env.PORT || 4000
const controller = require("./controller/controller")
app.set("view engine", "ejs")

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
//   const {x, y, operation_type} = req.body;
//   const operation_types = ["addition", "subtraction", "multiplication"];
//   if(!operation_types.includes(operation_type)){
//       return res.status(400).json({ok : false, message : "Invalid operation type provided."});
//   }
//   let result;
//   switch(operation_type){
//       case "addition":
//           result = x + y;
//           break;
//       case "subtraction":
//           result = x - y;
//           break;
//       case "multiplication":
//           result = x * y;
//           break;
//       default:
//           break;
//   }
  
//   if(!result) 
//   {
//       return res.status(400).json({ok : false, message : "Cant proceed with request input is empty."});
//   }
//   return res.status(200).json({ok : true, SlackName : "Samson onifade", operation_type, result})
// })
app.listen(Port)