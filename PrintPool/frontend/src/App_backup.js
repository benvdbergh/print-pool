import './styles/App.css';
import React, { Component } from "react"
import MapView from './components/MapView';

class App extends Component {   
    viewState = {
      lat: 37,
      lng: -12.4376,
      zoom: 8,
      width: 500,
      height: 500
    };

    vehicles = [
      { id: 1, coordinates: [37.7577, -122.4376] },
      { id: 2, coordinates: [37.9077, -122.8076] },
      { id: 3, coordinates: [37.7577, -123.576] }
    ];


    render() {
      return (
        <div>
          <MapView viewState={this.viewState} vehicles={this.vehicles} />
        </div>
      )
    }
  }
  

export default App;
