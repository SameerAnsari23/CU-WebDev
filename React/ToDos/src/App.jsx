import React, { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  function addTodos(title, description) {
    // setTodos([...todos, {title, description, id: new Date().getTime()}]);
    setTodos((prevTodos) => {
      localStorage.setItem('todos', JSON.stringify([...prevTodos, {title, description, id: new Date().getTime()  }]));
      return [...prevTodos, {title, description, id: new Date().getTime()  }];
    })
  }

  return (
    <div>
      <TodoInput addTodos={addTodos} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App