import React from 'react';
import Page from './Page';
import { gql, graphql } from 'react-apollo';
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'

class Lights extends Page {
    constructor(props) {
        super(props);
        this.state = {
          color: '#000000',
        };
    }

    renderContent() {
        let data = this.props.data;
        // data.startPolling(100);
        console.log(this.state);
        console.log(this.props.data);
        // const { data: {lights} } = this.props;
        // console.log(this.props.data.error);
        if (data.loading) {
            return (
                <p>Loading...</p>
            );
        }
        if (data.error) {
            return (
                <p>{data.error.toString()}</p>
            );
        }
        return (
            <div className="Lights">
                <ColorPicker value={data.lights.color} onDrag={this._setLights.bind(this)} />
            </div>
        );
    }

    renderTitle() {
        return 'Lights';
    }

    _setLights(color) {
        this.props.mutate({
            variables: {
                color: color,
                luminosity: 255,
            }
        })
        .then(({ data }) => {
            this.props.data.lights = {
                color: data.color,
            };
            this.forceUpdate();
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
