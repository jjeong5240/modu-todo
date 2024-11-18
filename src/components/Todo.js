import React, { useState } from 'react';
import styles from './Todo.module.css';

function Todo({ todo, toggleTodo, removeTodo }) {
  return (
    <div className={styles.todoContainer}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span 
        className={styles.todoText}
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
      >
        {todo.title}
      </span>
      <button 
        onClick={() => removeTodo(todo.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;

