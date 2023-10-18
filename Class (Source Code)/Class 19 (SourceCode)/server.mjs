import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/",(req , res)=>{
    res.send("hello world!");
})

app.listen(PORT , ()=>{
    console.log("listening on port : "  + PORT);
})