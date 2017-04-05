import React, { Component, PropTypes } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import { Link, IndexLink } from 'react-router';
import Radium from 'radium';
import { Route } from 'react-router-dom';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';

let RadiumLink = Radium(Link);
let RadiumIndexLink = Radium(IndexLink);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What can I do for you?</h2>
        </div>
        {this.props.children}
        <Menu>
            <RadiumIndexLink to="/">Home</RadiumIndexLink>
            <RadiumLink to="/graphql-ui">GraphQL</RadiumLink>
        </Menu>
        <Route exact path='/' component={Lights} />
        <Route path='/graphql-ui' component={GraphQlUi} />
      </div>
    );
  }
}

//App.propTypes = {
//    children: PropTypes.object.isRequired
//};

export default App;
