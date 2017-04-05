import React, { Component } from 'react';
import GraphiQL from 'graphiql';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class GraphQlUi extends Component {
  render() {
    return (
      <GraphiQL fetcher={graphQLFetcher} />
    );
  }
}

export default GraphQlUi;