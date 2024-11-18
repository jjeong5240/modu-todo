import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={() => {}}
        />
      ))}
    </div>
  );
}

export default App;






