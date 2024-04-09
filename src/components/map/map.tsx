import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LocationType } from '../../const';

type MapType = {
  points: (LocationType & { id: number })[];
  city: LocationType;
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

function Map({ points, city, active }: MapType): JSX.Element {
  return (
    <section className="cities__map map">
      <MapContainer center={[city.latitude, city.longitude]} zoom={10} style={{ height: '500px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map(({ latitude, longitude, id }) => (
          <Marker position={[latitude, longitude]} icon={id === active ? activeIcon : pointIcon} key={id}></Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default Map;
