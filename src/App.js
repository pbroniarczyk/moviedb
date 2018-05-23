import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./components/Layout.jsx";

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div>TEST!!!!!</div>
                <Layout />
            </ React.Fragment>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
); 