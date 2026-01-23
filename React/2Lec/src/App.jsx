import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log("App component rendered");
  
  let url = 'https://jsonplaceholder.typicode.com/posts';
      // fetch(url) 
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      // setTodos(data)})
      // .catch(err => console.log(err))

      useEffect( () => {
        console.log("useEffect called");
      fetch(url) 
      .then(res => res.json())
      .then(data => {
        console.log(data)
      setTodos(data)})
      .catch(err => console.log(err))
      }, [])
  return (
    <div>
      {todos.map(t => <div key={t.id}>{t.title} - {t.body}</div>)}
    </div>
  )
}

export default App