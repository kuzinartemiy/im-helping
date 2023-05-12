import { useRef, useEffect } from 'react';
import { /* Map, Placemark,  */ useYMaps } from '@pbe/react-yandex-maps';
import location from '../../assets/icons/location.svg';

const MapRecepient = () => {
  let myMap: ymaps.Map;
  const mapRef = useRef(null);
  const ymaps = useYMaps([
    'Map',
    'GeoObjectCollection',
    'Placemark',
    'GeoObject',
    'suggest',
    'geocode',
    'geolocation',
  ]);

  useEffect(() => {
    const iconLayout = 'default#image';
    const iconImageHref = location;
    const iconImageSize = [55.76, 37.64];
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ymaps == null || !mapRef.current) {
      return;
    }
    myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 15,
    });

    const myPlacemark = new ymaps.Placemark(
      [55.76, 37.64],
      {},
      {
        draggable: true, // The placemark is draggable.
        preset: 'islands#whiteStretchyIcon',
        iconLayout,
        iconImageHref,
        iconImageSize,
      },
    );

    myMap.geoObjects.add(myPlacemark);
  }, [ymaps]);

  return (
      <div
        style={{ height: '175px', width: '100%' }}
        ref={mapRef}
      />
  );
};

export default MapRecepient;
