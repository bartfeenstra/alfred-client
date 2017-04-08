import React from 'react';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Lights from './Lights';
import GraphQlUi from './GraphQlUi';

const graphQlClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:5000',
  }),
});

const App = function(props, context) {
  return (
    <ApolloProvider client={graphQlClient}>
      <div>
        {props.children}
        <Route exact path="/">
          <Redirect to="/lights" />
        </Route>
        <Route path="/lights" component={Lights} />
        <Route path="/graphql-ui" component={GraphQlUi} />
      </div>
    </ApolloProvider>
  );
}

export default App;
