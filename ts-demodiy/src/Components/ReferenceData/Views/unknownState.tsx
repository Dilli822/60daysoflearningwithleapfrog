
import { render } from "@testing-library/react";
import React, { Component } from "react";


interface AbcState {
    items: any[]; //replace any with suitable type
    covidData: string;
  }
  
  export default class Abc extends React.Component<{}, AbcState> {
   // the rest
  
  }