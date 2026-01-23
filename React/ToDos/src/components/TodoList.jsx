import React from 'react'

const TodoList = (props) => {
  // const { todos } = props;
  const todos = props.todos;
  return (
    <div>
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

export default TodoList