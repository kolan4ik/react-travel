import { MutableRefObject, useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../components/types/apatament';

const useMap = (mapRef: MutableRefObject<HTMLElement | null>, location: Location): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  let isLoadingMap = false;

  useEffect(() => {
    if (mapRef.current !== null && map === null && !isLoadingMap) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isLoadingMap = true;
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map !== null) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [location, map]);

  return (
    map
  );
};

export default useMap;
