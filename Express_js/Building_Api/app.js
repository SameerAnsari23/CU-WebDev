const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let todos = ['wakeup', 'brush', 'eat', 'code', 'sleep', 'scrolling'];

// Get the todos
app.get('/todos', (req, res) => {
 res.send(todos);
})

// Add a new todo
app.post('/todos', (req, res) => {
 const {newTask} = req.body;
 todos.push(newTask);
 res.send(todos);
})

// Increcrease the priority of a todo
app.get('/todos/up', (req, res) => {
 const {newTask} = req.query;
 const idx = todos.indexOf(newTask);
 if(idx > 0 && idx !== -1){
  [todos[idx], todos[idx - 1]] = [todos[idx - 1], todos[idx]];
 }
 res.send(todos);
})

// Decrease the priority of a todo
app.get('/todos/down', (req, res) => {
 const {newTask} = req.query;
 const idx = todos.indexOf(newTask);
 if(idx !== -1 && idx < todos.length - 1){
  [todos[idx], todos[idx + 1]] = [todos[idx + 1], todos[idx]];
 }
 res.send(todos);
})

// Delete a todo
app.get('/todos/delete', (req, res) => {
  const {newTask} = req.query;
  todos = todos.filter(task => {
   if(task !== newTask) return true;
   return false;
  })
  res.send(todos);
})

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
})
