import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';

function graphQLFetcher(graphQLParams) {
  // @todo These headers somehow still result in a text/plain request being made.
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch('http://localhost:5000', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(graphQLParams),
    mode: "no-cors",
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