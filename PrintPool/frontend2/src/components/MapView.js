import React from 'react';
import Map from 'react-map-gl';
// import carLogo from './car-svgrepo-com.svg';
import 'mapbox-gl/dist/mapbox-gl.css';

class MapView extends React.Component {
  viewState = this.props.viewState;
  vehicles = this.props.vehicles;

  componentDidMount() {
    this.onMove = (evt) => {
      this.props.dispatch({ type: 'setViewState', payload: evt.viewState });
    }
  }

  render() {
    return (
      <Map
        {...this.viewState}
        onMove={this.onMove}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {/* {this.vehicles.map((vehicle) => (
          <Marker key={vehicle.id} longitude={vehicle.coordinates[0]} latitude={vehicle.coordinates[1]}>
            <svg>
                <use xlinkHref={carLogo} />
            </svg>
          </Marker>
        ))} */}
      </Map>
    );
  }
}

export default MapView;