const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");

});

app.get("/hola", (req, res) => {
    res.send("hola world");
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})