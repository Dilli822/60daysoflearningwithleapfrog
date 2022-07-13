// import React, { useState } from 'react';
// import './App.css';
// import { AddTodoForm } from './Components/AddTodoForm';
// import TodoApp  from './Components/TodoApp';

// interface Todo {
//   text: string;
//   complete: boolean;
// }

// type ToggleTodo = (selectedTodo: Todo) => void;
// type AddTodo = () => void;

// function App() {
//   return (
//     <>
//     <TodoApp />
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { TodoList } from './Components/TodoList';
import { AddTodoForm } from './Components/AddTodoForm';
import './App.css';
// interface Todo having text & complete as interface members
interface Todo {
  text: string;
  complete: boolean;
}

// creating types which are returning void type functions
type ToggleTodo = (selectedTodo: Todo) => void;
type ToggleComplete = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;

// creating arrays having string and boolean elements
const initialTodos: Todo[] = [
  {
    text: 'wake up early at morning',
    complete: false,
  },
  {
    text: 'make your bed',
    complete: true,
  },
  {
    text: 'wash your face or become fresh',
    complete: false,
  },
  {
    text: 'ready for college',
    complete: true,
  }
];


function App() {
  // setting state here 
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      // applying conditions if todo param which has been mapped with todos then return todo with spread operator
      // and setting complete boolean either true or false
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      // if condition not meet return todo which is default data
      return todo;
    });
    // now setting newState with setTodos
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;