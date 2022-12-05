import React, { PureComponent, createRef} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVudmRiZXJnaCIsImEiOiJjbGFrNjN0YnEwMjVqM3BrMDg0bXdmYnBtIn0.ucG2ca-NXEuIZKOAVqYf_Q';

export default class MainMap extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          lng: 70.9,
          lat: 42.35,
          zoom: 9
        };
        this.mapContainer = createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
        
    }
    render() {
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
        }
}
