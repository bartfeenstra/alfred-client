import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

const graphQlClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:5000',
  }),
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={graphQlClient}>
            <BrowserRouter>
                <div className="App">
                    {this.props.children}
                    <Route exact path="/">
                        <Redirect to="/lights" />
                    </Route>
                    <Route path="/lights" component={Lights} />
                    <Route path="/graphql-ui" component={GraphQlUi} />
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
  }
}

export default App;