import { LocationType } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapType = {
  point: LocationType[];
};

function Map({ point }: MapType): JSX.Element {
  return <section className="cities__map map"></section>;
}

export default Map;
