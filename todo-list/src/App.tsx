import React, { useState } from 'react';
import './App.css';
import TodoApp  from './Components/TodoApp';

interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;


function App() {
  return (
    <>
    <TodoApp />
    </>
  );
}

export default App;

