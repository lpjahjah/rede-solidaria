import { IonSpinner } from '@ionic/react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.css';

const Map: React.FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDmjiGeVDbFDjD-jFvUtmx7eenD-Bx8ZXo',
	});

	const casaDosAvos = {
		lat: -28.727988525871172,
		lng: -52.84359948447916,
	};

	return (
		<div className="map">
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={{
						width: '100%',
						height: '100%',
					}}
					center={{
						lat: -29.345455,
						lng: -52.876749,
					}}
					zoom={7}
				>
					<Marker position={casaDosAvos} />
				</GoogleMap>
			) : (
				<IonSpinner />
			)}
		</div>
	);
};

export default Map;
