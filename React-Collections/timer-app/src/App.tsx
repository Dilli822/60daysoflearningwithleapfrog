// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {useState, useEffect} from "react";

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

const App = () => {
  const[state, setState] = React.useState<State>({
    time: 150,
    seconds: 150 - Math.floor((150 -1) / 60) *60 - 1,
    minutes: Math.floor((150 -1)/60),
  });

  React.useEffect(()=>{
    setTimeout(()=> {
      if( state.time === 0 ){
        return;
      }
      setState({
      time: state.time - 1,
      minutes: Math.floor((state.time -1) / 60),
      seconds: state.time - Math.floor((state.time -1) / 60) * 60 - 1,

    });
  }, 1000);
  }, [state.time]);

  return (
    <h3>
    {`${state.minutes}: ${state.seconds <= 10 ? `0${state.seconds}` : state.seconds}`}
    </h3>
  )
}
export default App;