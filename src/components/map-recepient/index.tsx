import { useState, useRef, useEffect } from 'react';
import Input from '../input/input';
import Text from '../text';
import styles from './map-recepient.module.scss';
import { /* Map, Placemark,  */ useYMaps } from '@pbe/react-yandex-maps';
import location from '../../assets/icons/location.svg';
import Button from '../button';

const MapRecepient = () => {
  /*   const inputRef = createRef();

  const [addressCoord, setAddressCoord] = useState([]); */
  const [inputValue, setInputValue] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let myMap: any;
  /*   const [savedYmaps, setSavedYmaps] = useState();
  const [isHideYandexInput, setIsHideYandexInput] = useState(false); */
  /* const iconLayout = 'default#image';
  const iconImageHref = 'location';
  const iconImageSize = [53, 53]; */
  const mapRef = useRef(null);
  const ymaps = useYMaps([
    'Map',
    'GeoObjectCollection',
    'Placemark',
    'GeoObject',
    'SuggestView',
    'geocode',
  ]);

  useEffect(() => {
    const iconLayout = 'default#image';
    const iconImageHref = location;
    const iconImageSize = [55.76, 37.64];
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ymaps == null || !mapRef.current /* || !currentCity */) {
      return;
    }
    myMap = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 15,
    });

    /*  const suggestView = ymaps.('suggest');
    console.log(suggestView); */

    const myGeocoder = ymaps.geocode('suggest');
    console.log(myGeocoder);
    myGeocoder.then(
      function (res) {
        myMap.geoObjects.add(res.geoObjects);
        // Выведем в консоль данные, полученные в результате геокодирования объекта.
        console.log(
          res.geoObjects.get(0).properties.get('metaDataProperty', {}),
        );
      },
      function (err) {
        console.log(err);
      },
    );

    /*     const myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: 'Point', // geometry type - point
        coordinates: [55.8, 37.8], // координаты точки
      },
    });
    myMap.geoObjects.add(myGeoObject); */
    /*  suggestView.events.add('select', function (e) {
      console.log('select');
    }); */

    const myPlacemark = new ymaps.Placemark(
      [55.76, 37.64],
      {},
      {
        draggable: true, // The placemark is draggable.
        preset: 'islands#whiteStretchyIcon',
        iconLayout,
        iconImageHref,
        iconImageSize,
      },
    );

    myMap.geoObjects.add(myPlacemark);
  }, [ymaps]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
        <Input
          placeholder={'Например: ул. Нахимова, д.9, у подъезда №3'}
          id={'suggest'}
          label={''}
          type={'text'}
          name={'adress'}
          value={inputValue}
          onChange={handleOnChange}
          padding={'9px 10px'}
        ></Input>
      </div>
      <h5 className={styles.container__text}>
        {' '}
        * Будьте осторожны, если указываете домашний адресс, <span>
          не
        </span>{' '}
        пишите его полностью.
      </h5>
      <div
        className={styles.container__map}
        style={{ height: '159px', width: '100%' }}
        ref={mapRef}
      ></div>
      <div className={styles.container__btn}>
      <Button children={'Продолжить'} /* type="submit" id="button" */></Button>
      </div></section>
  );
};

export default MapRecepient;
