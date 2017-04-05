import React, { Component } from 'react';

class Lights extends Component {
    constructor(props) {
        super(props);
        this.state = {
          red : 0,
          green : 0,
          blue : 0,
          luminosity : 0,
        };
    }

    setRed(event) {
        let state = this.state;
        state.red = event.target.value;
        this.setState(state);
        console.log(this.state);
    }

    render() {
        return (
            <div className="Lights">
                <form action="#" method="POST">
                    <input name="red" id="red" type="range" min="0" max="255" value={this.state.red} onChange={this.setRed.bind(this)}></input>
                    <input name="green" id="green" type="range" min="0" max="255" value={this.state.green} onChange={this.setLights}></input>
                    <input name="blue" id="blue" type="range" min="0" max="255" value={this.state.blue} onChange={this.setLights}></input>
                    <input name="luminosity" id="luminosity" type="range" min="0" max="255" value={this.state.luminosity} onChange={this.setLights}></input>
                </form>
            </div>
        );
    }

    setLights(event) {
        alert('foo');
    }
}

export default Lights;
