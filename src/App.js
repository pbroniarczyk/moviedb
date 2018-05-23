import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Layout from "./components/Layout.jsx";

// Assets
import "./global.sass";

class App extends React.Component {
    render() {
        return <Layout />;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
); 