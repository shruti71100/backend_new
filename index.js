require('dotenv').config();
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/listen",(req,res)=>{
    res.send("i am a good girl")
})
app.get("/ayush",(req,res)=>{
    res.send("<h1>hey i am a girl </h1>")
})
app.get("/ayushhh1",(req,res)=>{
    res.send("<h1>hey i am a girl </h1>") 
})
const port=process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


