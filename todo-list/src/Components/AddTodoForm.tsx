// import React, { useState } from 'react';

  
// // let's pass props
// interface Props {
//     addTodo: AddTodo;
// }

// type AddTodo = () => void;

// export const AddTodoForm: React.FC<Props> = ( { addTodo }) => {
//     const [text, setText ] = useState('');
//   return (
//     <form>
//         {/* input field with type text and value will be text which is string and onchanging setText state is called
//         with param event triggering capturing every input element value  */}
//       <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
//       {/* <button type="submit" onClick={(e) => {e.preventDefault(); addTodo(text); setText('')}}> Add Your Todo List </button> */}
//     </form>
//   );
// };
import React, { useState, ChangeEvent, FormEvent } from "react";
type Todo = {
  text: string;
  complete: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form style={{ padding: "0 2.5rem" }}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};