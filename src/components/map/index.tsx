/* import * as React from 'react'; */
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';
/* import useGeolocation from 'react-hook-geolocation'; */

const MapProd = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  const iconLayout = 'default#image';
  const iconImageHref = location;
  const iconImageSize = [53, 53];

  /*  const coordinates = [55.751574, 37.573856]; */
  const applicationСoordinates = [
    [55.751574, 37.573856],
    [55.61266, 37.684102],
    [55.826296, 37.63765],
    [55.701607, 37.531586],
    [55.744561, 37.605463],
  ];

  /*   const mapOptions = {
    modules: ['geocode', 'SuggestView'],
    defaultOptions: { suppressMapOpenBlock: true },
      width: '100%',
    height: '728px',
    defaultState: {
      center: [55.751574, 37.573856],
      zoom: 10,
    },
  }; */

  /*   const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  }); */

  return (
    <div className={styles.map_container}>
      <YMaps>
        <Map
          /* {...mapOptions} */ defaultState={defaultState}
          width={'100%'}
          height={'728px'}
        >
          {applicationСoordinates.map((el, index) => {
            return (
              <Placemark
                options={{
                  iconLayout,
                  iconImageHref,
                  iconImageSize,
                }}
                geometry={el}
                key={index}
              />
            );
          })}
          {/*           {!geolocation.error && geolocation.latitude && (
              <Placemark
              className={styles.map_icon}
                geometry={[geolocation.latitude, geolocation.longitude]}
                options={{
                  preset: 'islands#geolocationIcon',
                  iconColor: 'green',
                }}
              />
            )} */}
        </Map>
      </YMaps>
    </div>
  );
};

export default MapProd;
