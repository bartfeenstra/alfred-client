import React from 'react';
import { gql, graphql } from 'react-apollo';
import Page from './Page';

class Lights extends Page {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      luminosity: 0,
    };
  }

  setRed(event) {
    const state = this.state;
    state.red = event.target.value;
    this.setState(state);
    this.setLights();
  }

  setGreen(event) {
    const state = this.state;
    state.green = event.target.value;
    this.setState(state);
    this.setLights();
  }

  setBlue(event) {
    const state = this.state;
    state.blue = event.target.value;
    this.setState(state);
    this.setLights();
  }

  setLuminosity(event) {
    const state = this.state;
    state.luminosity = event.target.value;
    this.setState(state);
    this.setLights();
  }

  renderContent() {
    return (
      <div className="Lights">
        <form action="#" method="POST">
          <input name="red" id="red" type="range" min="0" max="255" value={this.state.red} onChange={this.setRed.bind(this)} />
          <input name="green" id="green" type="range" min="0" max="255" value={this.state.green} onChange={this.setGreen.bind(this)} />
          <input name="blue" id="blue" type="range" min="0" max="255" value={this.state.blue} onChange={this.setBlue.bind(this)} />
          <input name="luminosity" id="luminosity" type="range" min="0" max="255" value={this.state.luminosity} onChange={this.setLuminosity.bind(this)} />
        </form>
      </div>
    );
  }

  setLights(event) {
    this.props.mutate({
      variables: {
        red: this.state.red,
        green: this.state.green,
        blue: this.state.blue,
        luminosity: this.state.luminosity,
      },
    });
  }
}


const setLightsQuery = gql`
mutation ($red: Int!, $green: Int!, $blue: Int!, $luminosity: Int!) {
    setLights(
        lights: {
            red: $red,
            green: $green,
            blue: $blue,
            luminosity: $luminosity,
        }
    ) {
        lights {
            red,
            green,
            blue,
            luminosity
        }
    }
}
`;

export default graphql(setLightsQuery)(Lights);
