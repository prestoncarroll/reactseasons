import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';




class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     //this is the only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: '' };

    // }

    //Doing the same thing as above^^
    state = { lat: null, errorMessage: '' };


    componentDidMount() {
        console.log('component mounted, got location!');
        window.navigator.geolocation.getCurrentPosition(


            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })

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
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>
            <Loader />
        </div>

    }
}


ReactDom.render(
    <App />, document.querySelector('#root')
)