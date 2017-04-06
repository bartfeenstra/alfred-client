import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What can I do for you?</h2>
          <Link to="/lights">Lights</Link>
          <Link to="/graphql-ui">GraphQL</Link>
        </div>
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    return "";
  }
}

export default Page;
