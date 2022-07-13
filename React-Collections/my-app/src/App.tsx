import React from 'react';
import logo from './logo.svg';
import Counter from './Components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter/>
    </div>
  );
}

export default App;
// import * as React from 'react';

// import Count from './Components/count';

// interface Props {
//     count: number;
// }
  

// interface State {
//   count: number;
// };

// export default class App extends React.Component<Props, State> {
//   state: State = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: (this.state.count + 1)
//     });
//   };

//   decrement = () => {
//     this.setState({
//       count: (this.state.count - 1)
//     });
//   };

//   render () {
//     return (
//       <div>
//         <Count count={this.state.count} />
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }