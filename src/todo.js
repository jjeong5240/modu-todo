import React from 'react';

function Todo({ todo, removeTodo, toggleTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
