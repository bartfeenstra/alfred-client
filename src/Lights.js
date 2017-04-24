import React from 'react';
import Page from './Page';
import { gql, graphql } from 'react-apollo';
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'

class Lights extends Page {
    constructor(props) {
        super(props);
        this.state = {
          color: null,
        };
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops.data.loading || nextprops.data.error) {
            return;
        }
        this.setState({
            color: nextprops.data.lights.color,
        });
    }

    renderContent() {
        if (this.state.color == null) {
            return (
                <p>Loading...</p>
            );
        }
        return (
            <div className="Lights">
                <ColorPicker value={this.state.color} onDrag={this._setLights.bind(this)} />
            </div>
        );
    }

    renderTitle() {
        return 'Lights';
    }

    _setLights(color) {
        // Set the new color for immediate visual feedback to the user.
        this.setState({
            color: color,
        });
        this.props.mutate({
            variables: {
                color: color,
                luminosity: 255,
            }
        })
        .then(({ data }) => {
            // Set the color as confirmed by the server.
            this.setState({
                color: data.setLights.lights.color,
            });
        })
        .catch((error) => {
            console.log('there was an error sending the query', error);
        });
    }
}


const getLightsQuery = gql`
{
    lights {
        color,
        luminosity
    }
}
`;


const setLightsQuery = gql`
mutation ($color: String!, $luminosity: Int!) {
    setLights(
        lights: {
            color: $color,
            luminosity: $luminosity,
        }
    ) {
        lights {
            color,
            luminosity
        }
    }
}
`;

export default graphql(getLightsQuery, {
    options: {
        pollInterval: 10000,
    },
})(graphql(setLightsQuery)(Lights));
