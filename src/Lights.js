import React from 'react';
import Page from './Page';
import { gql, graphql } from 'react-apollo';
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'

class Lights extends Page {
    constructor(props) {
        super(props);
        this.state = {
          color: 'black',
        };
    }
    onDrag(color, c) {
        this.setState({color});
        this._setLights()
    }

    renderContent() {
        return (
            <div className="Lights">
                <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)} />
            </div>
        );
    }

    _setLights(event) {
        console.log(this.state);
        this.props.mutate({
            variables: {
                red: parseInt(this.state.color.substring(1, 3), 16),
                green: parseInt(this.state.color.substring(3, 5), 16),
                blue: parseInt(this.state.color.substring(5, 7), 16),
                luminosity: 255,
            }
        })
        .then(({ data }) => {
            console.log('got data', data);
        })
        .catch((error) => {
            console.log('there was an error sending the query', error);
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