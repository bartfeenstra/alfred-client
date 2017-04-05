import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Radium from 'radium';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';

let RadiumLink = Radium(Link);

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <h2>What can I do for you?</h2>
          <Menu>
            <RadiumLink to="/">Home</RadiumLink>
            <RadiumLink to="/graphql-ui">GraphQL</RadiumLink>
          </Menu>
        </div>
        {this.props.children}
        <Route exact path="/" component={Lights} />
        <Route path="/graphql-ui" component={GraphQlUi} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
