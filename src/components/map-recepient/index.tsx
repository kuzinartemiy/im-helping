import { useState, /* useRef, useEffect, */ createRef } from 'react';
import Input from '../input/input';
import Text from '../text';
import styles from './map-recepient.module.scss';
import {
  YMaps,
  Map,
  Placemark /* , useYMaps, ZoomControl */,
} from '@pbe/react-yandex-maps';

interface IDefaultState {
  center: number[]
  zoom: number
}

const MapRecepient = () => {
  const defaultState: IDefaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };
  const inputRef = createRef();

  const [addressCoord, setAddressCoord] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [savedYmaps, setSavedYmaps] = useState();
  const [isHideYandexInput, setIsHideYandexInput] = useState(false);

  const API_KEY = '05f8d2ae-bd94-4329-b9f9-7351e2ec9627';
  const iconLayout = 'default#image';
  const iconImageHref = 'location';
  const iconImageSize = [53, 53];

  const mapOptions = {
    modules: ['geocode', 'SuggestView'],
    defaultOptions: { suppressMapOpenBlock: true },
    width: '100%',
    height: '728px',
  };

  const onClickAddress = (e: any, ymaps: any) => {
    const name = e.get('item').value;
    setInputValue(name);
    ymaps.geocode(name).then((result: any) => {
      const coord = result.geoObjects.get(0).geometry.getCoordinates();
      setAddressCoord(coord);
    });
  };

  const onYmapsLoad = (ymaps: any) => {
    setSavedYmaps(ymaps);
    const suggestView = new ymaps.SuggestView('suggest', inputRef.current);
    suggestView.events.add('select', (e: any) => {
      return onClickAddress(e, ymaps);
    });
  };

  const onClickToMap = async (e: any) => {
    const coords = e.get('coords');
    setAddressCoord(coords);
    const result = await savedYmaps.geocode(coords);
    const firstGeoObject = result.geoObjects.get(0);
    setInputValue(firstGeoObject.getAddressLine());
    setIsHideYandexInput(true);
  };
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
          /* id={'suggest'} */ label={''}
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
      {/* <div className={styles.container__map} style={{ height: '728px', width: '100%' }} ref={mapRef}></div> */}
      {/* <YMaps
        query={{
          load: 'package.full',
          apikey: API_KEY,
        }}
      >
        <Map
        /*  state={
            addressCoord ? { ...mapState, center: addressCoord } : mapState
          }
          {...mapOptions}
          defaultState={defaultState}
          onLoad={onYmapsLoad}
          width="100%"
          height={'159px'}
          onClick={onClickToMap}
        >
          {addressCoord && <Placemark options={{
            iconLayout,
            iconImageHref,
            iconImageSize,
          }}geometry={addressCoord} />}
        </Map>
      </YMaps> */}

      <YMaps
        query={{
          apikey: API_KEY,
        }}
      >
        <Map defaultState={defaultState} width="100%" height={'159px'} /* onClick={onClickToMap} */>
        { addressCoord && <Placemark
            geometry={addressCoord}
            options={{
              iconLayout,
              iconImageHref,
              iconImageSize,
            }}
          />}
        </Map>
      </YMaps>
      <button type="submit" id="button">
        Проверить
      </button>
    </section>
  );
};

export default MapRecepient;
