import React, { useState } from 'react';

function Todo({ todo, toggleTodo, removeTodo }) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', flex: 1 }}>
        {todo.title}
      </span>
      {showDelete && (
        <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      )}
    </div>
  );
}

export default Todo;

