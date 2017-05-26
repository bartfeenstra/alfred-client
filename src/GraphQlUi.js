import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';

function graphQLFetcher(graphQLParams) {
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  return fetch('http://192.168.1.101:8000', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify([graphQLParams]),
    mode: "cors",
  }).then(response => response.json().then(json => json[0]));
}

class GraphQlUi extends Component {
  render() {
    return (
      <GraphiQL fetcher={graphQLFetcher} />
    );
  }
}

export default GraphQlUi;
