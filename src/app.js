import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default App;




