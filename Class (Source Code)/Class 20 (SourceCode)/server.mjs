import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

// this is a bad practice to store data on server this array will be replaced with mongodb data base
let user = [];


// types of api requests are
// GET
// POST 
// OPTION
// PUT
// DELETE



// GET API
app.get("/" ,(req , res)=>{
    res.send("hello world! \n This is the response from the server");
})

// POST API
app.post("/add" ,(req , res)=>{

    let name = req.params.name;
    let age = req.params.age;
    let fName = req.params.fName;
    let id = req.params.id;

    user.push({name, age, fName , id})

    res.send("user added successfully");
})

// DELETE API

app.delete("delete" , (req , res)=>{

    let user = req.params.user;
    let index = user.findIndexOf(user);
    user.splice(index, 1);

    res.send("user deleted successfully");
})

// PUT API

app.put("/update" ,(req , res)=>{

    let user = req.params.user;
    let newName = req.params.name
    let index = user.findIndexOf(user);
    user[index].name = newName;

    res.send("user updated successfully");
})




app.listen(PORT , ()=>{
    console.log("listening on port : "  + PORT);
})