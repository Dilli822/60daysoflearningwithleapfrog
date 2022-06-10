import React, { useState } from 'react';
import HandleProps from "./handle.Props";

interface IState {
    example_props: {
        name: string
        age: number
        year: number
    }[]
  }
  
function CloneApp() {
    const [example_props, setExaampleProps] = useState <IState["example_props"]> ([]);

   return (
    <div className="App">
      <div>
      <HandleProps example_props={example_props} />
      </div>

    </div>
  );
}

export default CloneApp;
