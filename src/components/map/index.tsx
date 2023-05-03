
import { useState, useEffect, useRef } from 'react';
import styles from './map.module.scss';
import location from '../../assets/icons/location.svg';
import TopPanel from '../top-panel';
import { ReactComponent as MapIcon } from '../../assets/icons/requests-map.svg';
import MapFilterPopup from '../map-filter-popup';
import { CoordsPopup } from '../coords-popup/coords-popup';
import { requests } from './consts';
import { /* YMaps, Map, Placemark,  */useYMaps } from '@pbe/react-yandex-maps';
// import Select from '../select';

const API_KEY = '05f8d2ae-bd94-4329-b9f9-7351e2ec9627';

// 'geoObject.addon.balloon'

const MapProd = () => {
  const [reqInfo, setReqinfo] = useState();
  const [currentCity, setCurrentCity] = useState<any>(requests[0]);
  const [btnCoords, setBtnCoords] = useState<any>();
  const [address, setAddress] = useState('Москва, ул. Льва Толстого, 16');
  const [coordinates, setCoordinates] = useState([]);
  let myMap: any;
  const placemarkCollection: any = {};
  const ymaps = useYMaps(['Map', 'GeoObjectCollection', 'Placemark', 'GeoObject',
  ]);
  const mapRef = useRef(null);

  useEffect(() => {
    if ((ymaps == null) || !mapRef.current || !currentCity) {
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

  const  mySearchControl = new ymaps.control.SearchControl({
    options: {
      noPlacemark: true,
    },
  });

  const onFilterClick: React.MouseEventHandler = (e) => setBtnCoords([e.pageX, e.pageY]);
  const onOverlayClick = () => setBtnCoords([]);
  const onSelectChange = (e: any) => {
    myMap?.setBounds(
      placemarkCollection[e.target.value].getBounds(), { checkZoomRange: true },
    )
      .then(() => { if (myMap.getZoom > 15) myMap.getZoom(15); });
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleAddressSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${address}`);
      const data = await response.json();
      const point = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
      const [longitude, latitude] = point.split(' ');
      setCoordinates([parseFloat(latitude), parseFloat(longitude)]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className={styles.map_container}>
    <TopPanel title='Карта' titleIcon={<MapIcon/>} onFilterClick={onFilterClick}/>
    <select name={'Выберите город'} onChange={onSelectChange}>
          {requests.map((el, i) => <option value={el.city.name} key={i}>{el.city.name}</option>)}
    </select>
    <form onSubmit={handleAddressSubmit}>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
{/*     <Select value={'Выберите город'} onChange={onSelectChange} elementsList={}>
    {requests.map((el, i) => <option value={el.city.name} key={i}>{el.city.name}</option>)}
    </Select> */}
    {btnCoords && btnCoords.length > 0 && <CoordsPopup pageX={btnCoords[0]} pageY={btnCoords[1]} onOverlayClick={onOverlayClick}><MapFilterPopup/></CoordsPopup>}
    <div style={{ height: '728px', width: '100%' }}ref={mapRef}></div>
  </div>
  );
};

export default MapProd;
