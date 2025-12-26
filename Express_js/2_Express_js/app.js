const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
// app.use(express.json())

app.get('/', (req,res) => {
 res.send('welcome to magic class')
})

// /hi?name=Rafeeq
app.get('/hi', (req,res) => {
 res.send(`hello ${req.query.sam}`)
})

// app.get('/submit', (req,res) => {
//  const {username, password} = req.query;
//  res.send(`Hello ${username} is this ur ${password}`)
// })

app.post('/submit', (req, res) => {
 // console.log('sss')
 const {username, password} = req.body;
 res.send(`The username was ${username} and his password is ${password}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
