import React from 'react';

// 👇️ type props as {name: string}, and state as {value: string}
class ApiCall extends React.Component<{name: string}, {value: string}> {
  constructor(props: any) {
    super(props);

    this.state = {value: ''};
  }

  handleChange = (event: any) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.value}
          />
          <button type="submit">Submit</button>
        </form>

        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default ApiCall;