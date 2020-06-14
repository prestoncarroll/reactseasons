import React from 'react';
import ReactDom from 'react-dom';




class App extends React.Component {

    constructor(props) {
        super(props);

        //this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(

            // called setState
            position => {
                this.setState({ lat: position.coords.latitude });
                console.log(position);
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );

    }

    //React says we have to define render!!!!!
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>
                Error: {this.state.errorMessage}
            </div>
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <div>
                latitude: {this.state.lat}
            </div>
        }

        return <div> Loading!</div>

    }
}


ReactDom.render(
    <App />, document.querySelector('#root')
)