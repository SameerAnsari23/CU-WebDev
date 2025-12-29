const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/hello', (req, res) => {
 console.log("Welcome to your server")
 res.send("Welcome to your first server");
})

app.get('/', (req, res) => {
 res.send("Hello Warangal")
})


// To send data on server using GET request 
// 1] Paramas                    2] Query Parameter 

// Params req: '/greet/name
app.get('/greet/:name', (req, res) => {
 res.send(`Hello ${req.params.name}`)
})



// Query Parameter req: /bye?name=Bindu
app.get('/bye', (req, res) => {
 res.send(`Bye ${req.query.name}`)
})


// app.use(express.static(path.join(__dirname, "public")))
app.get('/students', (req, res) => {
 console.log("hello")
 res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(PORT, () => {
 console.log(`Example app listening on port ${PORT}`);
})