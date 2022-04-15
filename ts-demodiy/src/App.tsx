import { count } from "console";
import React, { useState } from "react";
import { idText } from "typescript";
import './App.css';
import Country from './Components/ReferenceData/Views/Country';

function App() {
  const [name, setName] = useState(" ");

  var x = name
  var text: (string | number)[] = ["usa", "nepal", "mexico"];
  var result = text.includes(x);
  console.log(result);
  var final = result;
  console.log(" after filtering --.", text)
  console.log('this is includes data -->', final)

  
  const handleInput = (event: any) => {
    setName(event.target.value);
  };

  const logValue = () => {
    console.log(name);
    // if (name !== ""){
    //   alert(name)
    //   var findMe = name;
    //   }
    if (result){
      alert("Yes there is country named " + name)
    }
    else if (result === false) {
      alert("no result is found or country named " + name + " is found!!!")
    }
  
  };




  // const store = countries.filter(name => countries.includes(name)).map(filteredName => ( <li> {filteredName} </li> ))
  // console.log(store)

  // const names: ( string | number )[] = ['James', 'John', 'Paul', 'Ringo', 'George'];
  
  return (
    <div>
    <input onChange={handleInput} placeholder="Enter name"/>
    <button onClick={logValue}>Log value</button>

    <p>
    </p>
    
  </div>
  );
}

export default App;
