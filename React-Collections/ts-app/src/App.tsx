import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

interface Istate {
  cs_Students: {
    name: string;
    age: number;
    gender: string;
    disable?: boolean;
  }[]
}

// handling state in react typescript
function App() {

  const [number, setNumber] = useState <number> (5);
  const [numbers, setNumbers] = useState<string | number> (450);

  // dynamic array with defined type with static objects array defined type
  const [people, setPeople] = useState < {name: string, age: number} [] > ( [] );

  const [pupil, setPupil] = useState <Istate["cs_Students"]>([]);

  // static array inside the state
  const [persons, setPersons] = useState([
   {
    name: "Dilli Hang Rai",
    age: 23,
    bio: "student, front end developer, musicians"
    },
   {
    name: "Saphal",
    age: 21,
    bio: "Student, survey inspector"
   }]
  )

  // mapping the array 
  persons.map(person => {
    // / accessing only the defined type members feature in ts
    person.age;
    person.bio;
    person.name;
  })

  people.map(peoples => {
    peoples.name;
    peoples.age;
    // peoples.note; // error occurs for unasigned arrays object
  })

  const changeNumber = () => {
    // setNumber("10");  // Argument of type 'string' is not assignable to parameter of type 'SetStateAction<number>'.
    setNumber(150);  // setting the number here inside the setNumber()
    setNumbers("150"); // see no error as string | number union type added above
  }

  const findPupil = () => {
    pupil.map(pupils => {
      pupils.age;
      pupils.gender;
    })
  }
  findPupil();

  return (
    <div className="App">

    </div>
  );
}

export default App;
