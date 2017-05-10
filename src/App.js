import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { createBatchingNetworkInterface } from 'apollo-client';

const graphQlClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://192.168.1.101:8000',
    batchInterval: 100,
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
