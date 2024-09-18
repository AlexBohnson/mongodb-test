const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("hello world");

});

app.get("/hola", (req, res) => {
    res.send("hola world");
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})

fetch("localhost:3000/hola")
.then((res)=> res.json())
.then((data)=>console.log(data))
.catch((err)=>{
    console.log("error occured", err)
});