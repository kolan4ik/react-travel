import React, { useEffect, useRef } from 'react';
import leaflet, { Marker, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from '../../assets/img/pin.svg';
import { City, Location } from '../types/apatament';
import useMap from '../../hooks/useMap';

const defaultCustomIcon = leaflet.icon({
  iconUrl: Pin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type CustomMapProps = {
  pointsList: City[];
  centerMap: Location;
}
const CustomMap = ({ pointsList, centerMap }: CustomMapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, centerMap);
  let isAddMarkerMap = false;

  useEffect(() => {
    if (map !== null && pointsList.length > 0 && !isAddMarkerMap) {
      pointsList.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isAddMarkerMap = true;
    }
    return () => {
      if (map !== null) {
        map.eachLayer((layer) => {
          layer.remove();
        });
        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        );
        map.addLayer(layer);
      }
    };
  }, [map, pointsList]);

  return (
    <section data-testid="cities__map" className="cities__map map" ref={mapRef} />
  );
};

export default CustomMap;
