// import * as React from "react";
// import logo from './logo.svg';
// import './App.css'
// /// <reference path="../node_modules/@types/react/index.d.ts" /> 
// /// <reference types="react" />

// //  import * as React from "react";

// // declare var React: any;
// // var React;
// import React from "react";
// import * as React from "react";

// import * as ReactObj from "react";


// declare global {
//     var React: typeof ReactObj;

// }

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}


class App extends React.Component<{}, {}> {
  componentDidMount() {
    console.log("mount");
  }

  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to React</h2>
        
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
