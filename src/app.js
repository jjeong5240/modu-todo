import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleAllTodos = () => {
    const areAllCompleted = todos.every(todo => todo.isCompleted);
    setTodos(todos.map(todo => ({
      ...todo,
      isCompleted: !areAllCompleted
    })));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} toggleAllTodos={toggleAllTodos} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default App;





