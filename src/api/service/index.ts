import axios from 'axios';

const API_URL = 'https://your-api-url.com/todos';

export const fetchTodos = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createTodo = async (todo) => {
  const { data } = await axios.post(API_URL, todo);
  return data;
};

export const updateTodo = async (id, todo) => {
  const { data } = await axios.put(`${API_URL}/${id}`, todo);
  return data;
};

export const deleteTodo = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};
