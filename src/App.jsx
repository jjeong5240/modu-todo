import React, { useState } from 'react';
import TodoForm from './TodoForm.jsx';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // 할 일 목록 상태
  const [filter, setFilter] = useState('all'); // 필터 상태 ('all', 'completed', 'active')

  const addTodo = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: e.target.value.trim(),
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      e.target.value = ''; // 입력창 초기화
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'active') return !todo.isCompleted;
    return true; // 'all'
  });

  return (
    <div className="todo-app">
      <div className="todo-header">
        <h1>todos</h1>
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          onKeyPress={addTodo} // Enter 키 이벤트
        />
      </div>

      <section className="todo-list">
        {/* 할 일 목록 */}
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={`todo-title ${
                todo.isCompleted ? 'completed' : ''
              }`}
            >
              {todo.title}
            </span>
            <button
              className="todo-delete"
              onClick={() => removeTodo(todo.id)}
            >
              X
            </button>
          </div>
        ))}
      </section>

      {/* 버튼 영역 - 할 일이 있을 때만 표시 */}
      {todos.length > 0 && (
        <footer className="todo-footer">
          <span className="todo-count">
            {todos.filter((todo) => !todo.isCompleted).length} item(s) left
          </span>
          <div className="todo-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={`filter-btn ${
                filter === 'completed' ? 'active' : ''
              }`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      )}
    </div>
  );
}

export default App;

