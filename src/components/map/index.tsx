/* import * as React from 'react'; */
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './map.module.scss';
/* import useGeolocation from 'react-hook-geolocation'; */

const MapProd = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

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
            <Placemark
            /*   options={{
                iconLayout: 'default#image',
                iconImageHref: 'images/location.svg',
                iconImageSize: [50, 50],
              }} */
              geometry={[55.751574, 37.573856]}
            />
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
