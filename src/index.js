import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


const App = () => {
    return <div>
        hi there!
        <SeasonDisplay />
    </div>
};


ReactDom.render(
    <App />, document.querySelector('#root')
)