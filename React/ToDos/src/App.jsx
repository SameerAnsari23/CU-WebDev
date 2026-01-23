import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  function todoHandler() {
    console.log("Title: ", title);
    console.log("Description: ", description);
    // setTodos([...todos, {title, description, id: new Date().getTime()}]);
    setTodos((prevTodos) => {
      localStorage.setItem('todos', JSON.stringify([...prevTodos, {title, description, id: new Date().getTime()  }]));
      return [...prevTodos, {title, description, id: new Date().getTime()  }];
    })
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter your title..'/>
      <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Enter your task description...' />
      <button onClick={todoHandler}>Add Task</button>
      <ul className='todo-list'>
        {todos.map(t => {
          return (
            <li key={t.id}>{t.title}: {t.description}</li>
          )
          })}
      </ul>
    </div>
  )
}

export default App