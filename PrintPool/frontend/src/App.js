import React, { Component } from "react";
import HomePage from './components/HomePage';
import Header from './Header';

class App extends Component {
    render(){
        return <div height="100vh">
            <Header/>
            {/* <pre id="info"></pre> */}
            <HomePage height="100%"/>
        </div>;
    }
}

export default App;