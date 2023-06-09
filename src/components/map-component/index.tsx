// /* eslint-disable */
import { useState, useEffect, useRef, type ChangeEvent } from 'react';
import styles from './map-component.module.scss';
import location from '../../assets/icons/location.svg';
import TopPanel from '../top-panel';
import { ReactComponent as MapIcon } from '../../assets/icons/requests-map.svg';
import { requests } from './map-component.constants';
import { useYMaps } from '@pbe/react-yandex-maps';
import { CoordsPopup } from '../common/coords-modal';
import TooltipMap from '../tooltip-map';
import ThanksPopup from '../modals/thanks-popup';
import Select from '../common/select';
import type ymaps from 'yandex-maps';

/* const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627"; */

// 'geoObject.addon.balloon'

const MapComponent = () => {
  const [reqInfo, setReqinfo] = useState<any>();
  const [placemarkCoords, setPlacemarkCoords] = useState<[number, number] | null>();
  const [isReqAccepted, setIsReqAccepted] = useState(false);
  let myMap: ymaps.Map;
  const placemarkCollection: any = {};
  const ymaps = useYMaps(['Map', 'GeoObjectCollection', 'Placemark', 'GeoObject']);

  const mapRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ymaps == null || !mapRef.current) {
      return;
    }

    myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });

    requests.forEach(city => {
      const cityCollection = new ymaps.GeoObjectCollection();
      city.requests.forEach(req => {
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
          setPlacemarkCoords([e.originalEvent.domEvent.originalEvent.pageX, e.originalEvent.domEvent.originalEvent.pageY]);
        });
        cityCollection.add(reqPlaceMark);
        placemarkCollection[city.city.name] = cityCollection;
      });
      myMap.geoObjects.add(cityCollection);
    });
  }, [ymaps]);

  const onOverlayClickRequest = () => {
    setPlacemarkCoords(null);
    setReqinfo(null);
  };
  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    void myMap
      ?.setBounds(placemarkCollection[e.target.value].getBounds(), {
        checkZoomRange: true,
      })
      .then(() => {
        if (myMap.getZoom() > 15) myMap.getZoom();
      });
  };

  const onAcceptButtonClick = () => {
    setIsReqAccepted(true);
    setReqinfo(null);
  };
  const onThanksOverlayClick = () => setIsReqAccepted(false);

  return (
    <div className={styles.container}>
      <TopPanel filterType='MapFilterPopup' title='Карта' titleIcon={<MapIcon />} />
      {Boolean(reqInfo) && Boolean(placemarkCoords) && placemarkCoords != null && (
        <CoordsPopup pageX={placemarkCoords[0]} pageY={placemarkCoords[1]} onOverlayClick={onOverlayClickRequest}>
          <TooltipMap
            cardData={{
              id: reqInfo.id,
              owner: reqInfo.owner,
              about: reqInfo.description,
              completedAppQuantity: reqInfo.qty,
              onButtonClick: onAcceptButtonClick,
            }}
          />
        </CoordsPopup>
      )}

      {isReqAccepted && placemarkCoords != null && (
        <CoordsPopup pageX={placemarkCoords[0]} pageY={placemarkCoords[1]} onOverlayClick={onThanksOverlayClick}>
          <ThanksPopup />
        </CoordsPopup>
      )}

      <div className={styles.container__map} style={{ height: '728px', width: '100%' }} ref={mapRef}>
        <section className={styles.container__map__select}>
          <Select value={'Выберите город'} elementsList={requests.map(el => el.city.name)} onChange={onSelectChange} />
        </section>
      </div>
    </div>
  );
};

export default MapComponent;
