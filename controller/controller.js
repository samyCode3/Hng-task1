const express = require("express")

const router = express()

router.post("/hng-task", (req, res) => {
const {x, y, operation_type} = req.body;
  const operation_types = ["add", "substract", "multiply"];
  if(!operation_types.includes(operation_type)){
      return res.status(400).json({ok : false, message : "Invalid operation type provided."});
  }
  let result;
  switch(operation_type){
      case "add":
          result = (x + y);
          break;
      case "substract":
          result = x - y;
          break;
      case "multiply":
          result = x * y;
          break;
      default:
          break;
  }
  
  if(!result) 
  {
      return res.status(400).json({ok : false, message : "Cant proceed with request input is empty."});
  }
  return res.status(200).json({ok : true, SlackName : "Samson onifade", operation_type : operation_types, result : result})
})


module.exports = router