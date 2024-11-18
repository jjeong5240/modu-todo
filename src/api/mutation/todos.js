import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as api from '../services';

export const useFetchTodos = () => {
  return useQuery('todos', api.fetchTodos);
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(api.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, todo }) => api.updateTodo(id, todo), {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(api.deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
};
