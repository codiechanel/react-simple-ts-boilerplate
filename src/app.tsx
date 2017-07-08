import * as React from "react";
// import logo from './logo.svg';
// import './App.css';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name}
        </div>
      </div>
    );
  }
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
          <Hello name="TypeScript" enthusiasmLevel={10} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
