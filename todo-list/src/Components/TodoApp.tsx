import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

// array having key value pairs
const initialTodos: Todo[] = [
  {
    text: 'wake up',
    complete: false,
  },
  {
    text: 'make bed',
    complete: true,
  },
]

function TodoApp() {
  // let's make a function that can toggle 
  // arrow function having param as selectedTodo: Todo
  const toggleTodo = (selectedTodo: Todo) => {

    // intializing the state todos into variable newTodos
    // mapping the array and inserting param as todoParam 
    // applying first condition if todoParam mapped data is equals to selectedTodo which is interface array Todo itself
    // if condition meet returning todoParam using spreadoperator which copy and return exact same new array
    // with complete beign just opposite with either true or false
    const newTodos = todos.map((todoParam) => {

        if(todoParam === selectedTodo){
          return {
            ...todoParam,
            complete: !todoParam.complete,
          };
        }
        // if condition is not meet it is returning simply todoParam with same complete: boolean exact value
        return todoParam;
       });

       // finnally setting the new State into setTodos(newTodos) see line no: 39 for newTodos
       setTodos(newTodos);
  }
    // setting state for toggle button input with useState hooks
     const [todos, setTodos] = useState(initialTodos);

  return (
    <>
    <ul>
    {/* using state here with react hook as toggleTodo={toggleTodo} */}
    <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
    <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>
    </>
  );
}

export default TodoApp;

