import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderProps from "./components/render.Props";
import AddToTable from "./components/AddToTable";
import AddToList from "./components/AddToList";
import OList from './components/oList';
import List from "./components/List"

// export interface Istate to pass it down to props for other components too
export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Saphal Khawas",
      age: 21,
      img: "https://unsplash.it/45",
      note: "Works for municipality",
    },
    {
      name: "Dilli Hang Rai",
      age: 23,
      img: "https://unsplash.it/48",
      note: "student | Front End Developer",
    },
    {
      name: "Monkey.D.Luffy",
      age: 23,
      img: "",
      note: "MOnkey D. Luffy is a main character of One Piece anime who has dream of becoming king of pirates."
    }
  ])

  return (
    <div className="App">
      <OList people = {people} />
      <div>
        {/* passing people and setPeople as props */}
        {/* we are manipulating the state and setting people as setPeople */}
        {/* pushing the new array object into the people which is existing one array objects */}
        {/* <AddToTable people={people} setPeople={setPeople}/> */}
      </div>

      <div>
      <AddToList people={people} setPeople={setPeople}/>
      </div>

    </div>
  );
}

export default App;
