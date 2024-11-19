import React, { useState } from 'react';

function Todo({ todo, toggleTodo, removeTodo }) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
      }}
    >
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {todo.title}
      </span>
      {showDelete && (
        <button
          onClick={() => removeTodo(todo.id)}
          style={{
            marginLeft: '10px',
            background: '#ff6b6b',
            border: 'none',
            color: 'white',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default Todo;




