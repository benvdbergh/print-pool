import React from 'react';
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

		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			showUserLocation: true,
			showUserHeading: false
		})
		

		map.addControl(geolocate, 'bottom-right')
		map.on('load', () => {
			geolocate.trigger();

			map.loadImage(
				'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
				(error, image) => {
					if (error) throw error;
						map.addImage('custom-marker', image);
					// Add a GeoJSON source with 2 points
					map.addSource('workshops', {
						'type': 'geojson',
						'data': {
							'type': 'FeatureCollection',
							'features': [
								{
									'type': 'Feature',
									'geometry': {
										'type': 'Point',
										'coordinates': [ 4.0323, 51.913	]
									}
								},
								{
									'type': 'Feature',
									'geometry': {
										'type': 'Point',
										'coordinates': [4.414, 50.776]
									}
								}
							]
						}
					});

					// Add a symbol layer
					map.addLayer({
						'id': 'points',
						'type': 'symbol',
						'source': 'workshops',
						'layout': {
							'icon-image': 'custom-marker',
						}
					});
			});
		});

		map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

		const marker = new mapboxgl.Marker()
		marker.setLngLat([30.5, 50.5]);
		marker.setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"));
		marker.addTo(map);



		// map.on('mousemove', (e) => {
		// 	document.getElementById('info').innerHTML =
		// 	// `e.point` is the x, y coordinates of the `mousemove` event
		// 	// relative to the top-left corner of the map.
		// 	JSON.stringify(e.point) +
		// 	'<br />' +
		// 	// `e.lngLat` is the longitude, latitude geographical position of the event.
		// 	JSON.stringify(e.lngLat.wrap());
		// 	});
	}

	render() {
		return <div ref={this.mapContainer} className="map-container" height="100%"/>;
	}
}

export default MapView;