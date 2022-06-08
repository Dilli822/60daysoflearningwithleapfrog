import React from 'react';
import { TodoListItem } from './TodoListItem';
interface Todo {
    text: string;
    complete: boolean;
  }
  
type ToggleTodo = (selectedTodo: Todo) => void;
interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <>
    
    <ul>
    <h3>Todolist App</h3> 
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
    </>
  );
};