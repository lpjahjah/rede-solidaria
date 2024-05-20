import { useMemo, useRef, useState } from 'react';
import { useIonViewDidEnter } from '@ionic/react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { LatLngExpression, Map as LeafletMap } from 'leaflet';
import './style.css';
import Modal from '../Modal';

const region: LatLngExpression = [-30.1, -53.2];

const location: LatLngExpression = [-28.727988525871172, -52.84359948447916];

const Map: React.FC = () => {
	const [openModal, setOpenModal] = useState(false);
	const map = useRef<LeafletMap>(null);

	useIonViewDidEnter(() => {
		if (map.current) map.current.invalidateSize();
	});

	const eventHandlers = useMemo(
		() => ({
			click() {
				setOpenModal(true);
			},
		}),
		[]
	);

	return (
		<>
			<MapContainer ref={map} center={region} zoom={7} className="map">
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					minZoom={7}
					maxZoom={19}
				/>
				<Marker position={location} eventHandlers={eventHandlers}>
					{/* <Popup>Essa é a casa dos avós do LH.</Popup> */}
					<Tooltip>Casa dos avós do LH.</Tooltip>
				</Marker>
			</MapContainer>
			<Modal title="Lugar" open={openModal} setOpen={setOpenModal}>
				<h1>DESCRIÇÃO</h1>
			</Modal>
		</>
	);
};

export default Map;
