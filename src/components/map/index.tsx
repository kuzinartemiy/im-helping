// import * as React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';

const MapProd = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  const iconLayout = 'default#image';
  const iconImageHref = location;
  const iconImageSize = [53, 53];

  const applicationСoordinates = [
    [55.751574, 37.573856],
    [55.61266, 37.684102],
    [55.826296, 37.63765],
    [55.701607, 37.531586],
    [55.744561, 37.605463],
  ];

  const mapOptions = {
    modules: ['geocode', 'SuggestView'],
    defaultOptions: { suppressMapOpenBlock: true },
  };

  return (
    <div className={styles.map_container}>
      <YMaps>
        <Map
          {...mapOptions}
          defaultState={defaultState}
          height={'728px'}
          width={'100%'}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          /* onLoad={async (instance) => instance.geocode('Саратов')}
          modules={['geocode']} */
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
        </Map>
      </YMaps>
    </div>
  );
};

export default MapProd;
