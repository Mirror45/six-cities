import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { CardType } from '../../const';

type MapType = {
  points: CardType[];
  active: number | null;
};

const pointIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const activeIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

function Map({ points, active }: MapType): JSX.Element {
  const {latitude, longitude} = points[0].city.location;
  return (
    <MapContainer center={[latitude, longitude]} zoom={10} style={{ height: '100%', maxWidth: '1144px', margin: '0 auto' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {points.map(({location, id }) => (
        <Marker position={[location.latitude, location.longitude]} icon={id === active ? activeIcon : pointIcon} key={id}></Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
