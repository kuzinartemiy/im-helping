// /* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';
import TopPanel from '../top-panel';
import { ReactComponent as MapIcon } from '../../assets/icons/requests-map.svg';
import { CoordsPopup } from '../coords-popup/coords-popup';
import { requests } from './consts';
import { useYMaps } from '@pbe/react-yandex-maps';
import Select from '../select';
import TooltipMap from '../tooltip-map/tooltip-map';
import ThanksPopup from '../thanks-popup';

/* const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627"; */

// 'geoObject.addon.balloon'

const MapComponent = () => {
  const [reqInfo, setReqinfo] = useState<any>();
  const [placemarkCoords, setPlacemarkCoords] = useState<any>();
  const [isReqAccepted, setIsReqAccepted] = useState(false);
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
    if (ymaps == null || !mapRef.current) {
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
          setPlacemarkCoords([e.originalEvent.domEvent.originalEvent.pageX, e.originalEvent.domEvent.originalEvent.pageY]);
        });
        cityCollection.add(reqPlaceMark);
        placemarkCollection[city.city.name] = cityCollection;
      });
      myMap.geoObjects.add(cityCollection);
    });
  }, [ymaps]);

  const onOverlayClickRequest = () => {
    setPlacemarkCoords([]);
    setReqinfo(null);
  };
  const onSelectChange = (e: any) => {
    myMap
      ?.setBounds(placemarkCollection[e.target.value].getBounds(), {
        checkZoomRange: true,
      })
      .then(() => {
        if (myMap.getZoom > 15) myMap.getZoom(15);
      });
  };

  const onAcceptButtonClick = () => {
    setIsReqAccepted(true);
    setReqinfo(null);
  };
  const onThanksOverlayClick = () => setIsReqAccepted(false);

  return (
    <div className={styles.container}>
      <TopPanel
        filterType='MapFilterPopup'
        title="Карта"
        titleIcon={<MapIcon />}
      />
      {reqInfo && placemarkCoords
        ? <CoordsPopup
            pageX={placemarkCoords[0]}
            pageY={placemarkCoords[1]}
            onOverlayClick={onOverlayClickRequest}>
      <TooltipMap cardData={{
        id: reqInfo.id,
        owner: reqInfo.owner,
        about: reqInfo.description,
        completedAppQuantity: reqInfo.qty,
        onButtonClick: onAcceptButtonClick,
      }} id = {reqInfo.id}
      />
              </CoordsPopup>
        : null }

      { isReqAccepted
        ? <CoordsPopup
            pageX={placemarkCoords[0]}
            pageY={placemarkCoords[1]}
            onOverlayClick={onThanksOverlayClick}
      >
        <ThanksPopup/>
        </CoordsPopup>
        : null
        }

      <div
        className={styles.container__map}
        style={{ height: '728px', width: '100%' }}
        ref={mapRef}
      >
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
