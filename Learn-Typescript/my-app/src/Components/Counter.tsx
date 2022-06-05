import * as React from 'react';

import Count from './count';

interface Props {
    count: number;
}
  

interface State {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <div>
        <Count count={this.state.count} />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// import * as React from 'react';
// export default class Counter extends React.Component {
//     render () {
//     return (
//       <div>
//       </div>
//     );
//   }
// }
