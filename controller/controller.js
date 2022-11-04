const express = require("express")

const router = express()

router.post("/hng-task", (req, res) => {
const {x, y, operation_type} = req.body;
  const operation_types = ["addition", "substraction", "multiplication"];
  if(!operation_types.includes(operation_type)){
      return res.status(400).json({ok : false, message : "Invalid operation type provided."});
  }
  let result;
  switch(operation_type){
      case "addition":
          result = x + y;
          break;
      case "substraction":
          result = x - y;
          break;
      case "multiplication":
          result = x * y;
          break;
      default:
          break;
  }
  
  if(!result) 
  {
      return res.status(400).json({ok : false, message : "Can't complete this method of request"});
  }
  return res.status(200).json({slackUsername : "Samson onifade", operation_type, result})
})


module.exports = router