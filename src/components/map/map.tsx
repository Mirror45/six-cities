import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';

type MapProps = {
  points: Offer[];
};

const pointIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const activeIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const MapRecenter = ({latitude, longitude, zoom}: Offer['location']) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([latitude, longitude], zoom);
  }, [latitude, longitude, map, zoom]);
  return null;
};

function Map({ points }: MapProps): JSX.Element {
  const active = useAppSelector((state) => state.markerMap);

  if(!points.length) {
    return <div></div>;
  }

  const {latitude, longitude, zoom} = points[0].city.location;

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoom} style={{ height: '100%', maxWidth: '1144px', margin: '0 auto' }}>
      <MapRecenter {...{latitude, longitude, zoom}}/>
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
