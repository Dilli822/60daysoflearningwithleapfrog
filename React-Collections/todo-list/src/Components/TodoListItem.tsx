import React from 'react';

// interface for Todo
interface Todo {
  text: string;
  complete: boolean;
}

// type toggleTodo returning void function return type void
type ToggleTodo = (selectedTodo: Todo) => void;

// interface for Props
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li style={{ listStyle: 'none'}}>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
      <input type="checkbox" checked={todo.complete} onClick={() => {toggleTodo(todo);}}/>
      {' '}{todo.text}
      </label>
    </li>
  );
};