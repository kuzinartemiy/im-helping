import { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
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

const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627";
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
  const [options, setOptions] = useState<any>([]);
  const [value, setValue] = useState("");
  const mapRef = useRef();
  const ymaps = useYMaps();
  const [btnCoords, setBtnCoords] = useState<any>();
  const [currentCity, setCurrentCity] = useState<any>(requests[0]);
  const [searchOptions, setSearchOptions] = useState({
    categories: [],
    radius: 1,
    time: new Date(),
    date: new Date(),
  });
  const onFilterClick: React.MouseEventHandler = (e) => setBtnCoords([e.pageX, e.pageY]);
  const onOverlayClick = () => setBtnCoords([]);



  // тут получаем по названию города его координаты и записываем в option
  useEffect(() => {
    (async () => {
      try {
        if (currentCity) {
          const res = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${currentCity.city.name}`
          );
          const data = await res.json();
          const cityCoords = data.response.GeoObjectCollection.featureMember.map(
            (item:any) => item.GeoObject,
          );
          setOptions(cityCoords);

        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [currentCity]);
  
  return (
    <div className={styles.map_container}>
      <TopPanel title='Карта' titleIcon={<MapIcon/>} onFilterClick={onFilterClick}/>
      {btnCoords && btnCoords.length > 0 && <CoordsPopup pageX={btnCoords[0]} pageY={btnCoords[1]} onOverlayClick={onOverlayClick}><MapFilterPopup/></CoordsPopup>}

        <select value={currentCity.city.name} onChange={e => setCurrentCity(requests.find(el => el.city.name === e.target.value))}>
          {requests.map((el, i) => <option value={el.city.name} key={i}>{el.city.name}</option>)}
        </select>
{       options[0]?.Point ?  <Map
          {...mapOptions}
          instanceRef={mapRef}
          defaultState={{ center: options[0].Point.pos.split(" ").reverse(), zoom: 10 }}
          height={'728px'}
          width={'100%'}
          modules={['geocode', 'GeoObjectCollection']}

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
        </Map> : null}

    </div>
  );
};

export default MapProd;
