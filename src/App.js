import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
            {this.props.children}
            <Route exact path="/">
                <Redirect to="/lights" />
            </Route>
            <Route path="/lights" component={Lights} />
            <Route path="/graphql-ui" component={GraphQlUi} />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
