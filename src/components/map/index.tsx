import { useState } from 'react';
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';
import TopPanel from '../top-panel';
import { ReactComponent as MapIcon } from '../../assets/icons/requests-map.svg';
import MapFilterPopup from '../map-filter-popup';
import { CoordsPopup } from '../coords-popup/coords-popup';
import { requests } from './consts';

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
//
//
//
//
//
//
//
//
//

const MapProd = () => {
  const [btnCoords, setBtnCoords] = useState<any>();
  const [currentCity, setCurrenCity] = useState('Москва');
  const [searchOptions, setSearchOptions] = useState({
    categories: [],
    radius: 1,
    time: new Date(),
    date: new Date(),
  });
  const onFilterClick: React.MouseEventHandler = (e) => setBtnCoords([e.pageX, e.pageY]);
  const onOverlayClick = () => setBtnCoords([]);

  return (
    <div className={styles.map_container}>
      <TopPanel title='Карта' titleIcon={<MapIcon/>} onFilterClick={onFilterClick}/>
      {btnCoords && btnCoords.length > 0 && <CoordsPopup pageX={btnCoords[0]} pageY={btnCoords[1]} onOverlayClick={onOverlayClick}><MapFilterPopup/></CoordsPopup>}
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
          <Circle/>
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
