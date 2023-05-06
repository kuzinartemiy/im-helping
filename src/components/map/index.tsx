// /* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';
import TopPanel from '../top-panel';
import { ReactComponent as MapIcon } from '../../assets/icons/requests-map.svg';
import MapFilterPopup from '../modals/map-filter-popup';
import { CoordsPopup } from '../common/coords-modal';
import { requests } from './map.constants';
import { /* YMaps, Map, Placemark, */ useYMaps } from '@pbe/react-yandex-maps';
import Select from '../common/select';

/* const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627"; */

// 'geoObject.addon.balloon'

const MapComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reqInfo, setReqinfo] = useState();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCity, setCurrentCity] = useState<any>(requests[0]);
  const [btnCoords, setBtnCoords] = useState<any>();
  let myMap: any;
  const placemarkCollection: any = {};
  const ymaps = useYMaps([
    'Map',
    'GeoObjectCollection',
    'Placemark',
    'GeoObject',
  ]);
  const mapRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ymaps == null || !mapRef.current || !currentCity) {
      return;
    }

    myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });

    requests.forEach((city: any) => {
      const cityCollection = new ymaps.GeoObjectCollection();
      city.requests.forEach((req: any) => {
        const reqPlaceMark = new ymaps.Placemark(
          req.coord,
          {
            ...req,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: location,
            iconImageSize: [53, 53],
          },
        );
        reqPlaceMark.events.add('click', function (e: any) {
          setReqinfo(e.originalEvent.target.properties._data);
        });
        cityCollection.add(reqPlaceMark);
        placemarkCollection[city.city.name] = cityCollection;
      });
      myMap.geoObjects.add(cityCollection);
    });
  }, [ymaps]);

  const onFilterClick: React.MouseEventHandler = (e) =>
    setBtnCoords([e.pageX, e.pageY]);
  const onOverlayClick = () => setBtnCoords([]);
  const onSelectChange = (e: any) => {
    myMap
      ?.setBounds(placemarkCollection[e.target.value].getBounds(), {
        checkZoomRange: true,
      })
      .then(() => {
        if (myMap.getZoom > 15) myMap.getZoom(15);
      });
  };

  return (
    <div className={styles.container}>
      <TopPanel
        title="Карта"
        titleIcon={<MapIcon />}
        onFilterClick={onFilterClick} children={<MapFilterPopup/>}/>
      {Boolean(btnCoords) && btnCoords.length > 0 && (
        <CoordsPopup
          pageX={btnCoords[0]}
          pageY={btnCoords[1]}
          onOverlayClick={onOverlayClick}
        >
          <MapFilterPopup />
        </CoordsPopup>
      )}
      <div className={styles.container__map} style={{ height: '728px', width: '100%' }} ref={mapRef}>
      <section className={styles.container__map__select}>
        <Select
          value={'Выберите город'}
          elementsList={requests.map((el) => {
            return el.city.name;
          })}
          onChange={onSelectChange}
        ></Select>
      </section>
      </div>
    </div>
  );
};

export default MapComponent;
