import React from 'react'

const TodoInput = (props) => {
 const { addTodos } = props;

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function todoHandler() {
    addTodos(title, description);
        setTitle("");
    setDescription("");
  }
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Enter your title..'/>
      <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Enter your task description...' />
      <button onClick={todoHandler}>Add Task</button>
    </div>
  )
}

export default TodoInput