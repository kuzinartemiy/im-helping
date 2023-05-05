import { useState, useRef, useEffect } from 'react';
import Input from '../input/input';
import Text from '../text';
import styles from './map-recepient.module.scss';
import { /* YMaps, Map, Placemark, */ useYMaps } from '@pbe/react-yandex-maps';

const MapRecepient = () => {
  const [input, setInput] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  let myMap: any;
  const ymaps = useYMaps([
    'Map',
    'GeoObjectCollection',
    'Placemark',
    'GeoObject',
    'getCoordinates',
    'geometry',
  ]);
  const mapRef = useRef(null);
  /*   const myMap = new ymaps.Map(mapRef.current, {
    center: center,
    zoom: zoom,
  }); */

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ymaps == null || !mapRef.current) {
      return;
    }

    myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });

    /*     const myGeocoder = ymaps.geocode(input);

    myGeocoder.then(
      function (res) {
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          alert('Object coordinates:' + res.geoObjects.get(0).geometry.getCoordinates());
      },
      function (err) {
          alert('Error');
      }
  );
  myMap.events.add('click', function (e) {
    // Getting the click coordinate
    var coords = e.get('coords');
    alert(coords.join(', '));
}); */

    /*     requests.forEach((city: any) => {
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
    }); */
  }, [ymaps]);

  return (
    <section className={styles.container}>
      <Text
        children={'Укажите место встречи'}
        tag={'h5'}
        weight={'400'}
        size={'12'}
        lineHeight={'14px'}
      ></Text>
      <div className={styles.container__input}>
      <Input placeholder={'Например: ул. Нахимова, д.9, у подъезда №3'} /* id={'suggest'} */ label={''} type={'text'} name={'adress'} value={input} onChange={handleOnChange} padding={'9px 10px'}></Input>
      </div>
      <h5 className={styles.container__text}> * Будьте осторожны, если указываете домашний адресс, <span>не</span> пишите его полностью.</h5>
      <div className={styles.container__map} style={{ height: '728px', width: '100%' }} ref={mapRef}></div>
      <button type="submit" id="button">Проверить</button>
      </section>
  );
};

export default MapRecepient;
