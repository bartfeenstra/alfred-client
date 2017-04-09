import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import './Page.css';

let RadiumLink = Radium(Link);

class Page extends Component {
  render() {
  let title = '';
  if (this.renderTitle()) {
    title = <h1>{this.renderTitle()}</h1>
  }
    return (
      <div className="Page">
        <div className="Page-header">
          {title}
        </div>
        <Menu right>
          <h2>What can I do for you?</h2>
          <RadiumLink to="/lights">Lights</RadiumLink>
          <RadiumLink to="/graphql-ui">GraphQL</RadiumLink>
        </Menu>
        <div className="Page-Content">
          {this.renderContent()}
        </div>
      </div>
    );
  }

  renderContent() {
    return null;
  }

  renderTitle() {
    return null;
  }
}

export default Page;
