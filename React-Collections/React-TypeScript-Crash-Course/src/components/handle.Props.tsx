import React, { useState } from 'react';

interface IProps {
    example_props: {
        name: string,
        age: number,
        year: number
    }[]
}

// const HandleProps = ( props: IProps) => {
const HandleProps = ( props: IProps) => {
  return (
    <div>
        THIs is an example of handling props in react typescript.
        React.FC means it is react functional component accepting IProps.
        let's render it in app main function
    </div>
  );
}

export default HandleProps;
