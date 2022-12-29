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
        this.success = this.success.bind(this);
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;

        const map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserLocation: true,
                showUserHeading: false
            })
        );
        map.ref = React.useCallback((ref) => {
            if (ref) {
              // Activate as soon as the control is loaded
              ref.trigger();
            }
          }, []);
        
    }
    render() {
        return (
            <div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}
