import React from 'react';
// import carLogo from './car-svgrepo-com.svg';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVudmRiZXJnaCIsImEiOiJjbGFrNjN0YnEwMjVqM3BrMDg0bXdmYnBtIn0.ucG2ca-NXEuIZKOAVqYf_Q';


class MapView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = this.props.viewState
    this.workshops = this.props.workshops
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([30.5, 50.5])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      .addTo(map);
  }

  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export default MapView;