import React, { useState } from 'react';

function TodoForm({ addTodo, toggleAllTodos }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Todo</button>
      <button type="button" onClick={toggleAllTodos} style={{ marginLeft: '10px' }}>
        Toggle All
      </button>
    </form>
  );
}

export default TodoForm;


export default TodoForm;
