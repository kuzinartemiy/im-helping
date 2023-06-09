import { useState } from 'react';
import styles from './create-application-popup.module.scss';
import { ReactComponent as LocationIcon } from '../../../assets/icons/small-location.svg';
import Checkbox from '../../common/checkbox';
import CustomDatePicker from '../../common/datepicker';
import Input from '../../common/input';
import Modal from '../../common/modal';
import NavButton from '../../common/nav-button';
import Select from '../../common/select';
import Textarea from '../../common/textarea';
import UserAvatar from '../../user-avatar';
import Button from '../../common/button';
import Text from '../../common/text';
import { DatePickerTypes, type IOwner } from '../../../types';
import MapRecepient from '../../map-recepient';
import { YMaps } from '@pbe/react-yandex-maps';

interface ICreateApplicationPopup {
  owner: IOwner;
  onClose: () => void;
}

const CreateApplicationPopup = ({ owner, onClose }: ICreateApplicationPopup) => {
  const [window, setWindow] = useState(1);

  const onClick = () => {
    setWindow(window < 4 ? window + 1 : 4);
  };
  return (
    <Modal onClose={onClose}>
      <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
          <div className={styles.documentsPopup__avatar}>
            <UserAvatar src={owner.avatar} width='52' height='52' />
          </div>
          <div className={styles.documentsPoupup__userInfo}>
            <div className={styles.documentsPoupup__userInfoText}>
              <Text size='24' lineHeight='24px'>
                {owner.name}
              </Text>
              <div className={styles.documentsPoupup__userInfoPhone}>
                <Text size='16' lineHeight=' 9px' weight='700'>
                  Тел.:
                </Text>
                <Text size='16' lineHeight='19px'>
                  {owner.phone}
                </Text>
              </div>
            </div>
          </div>
        </div>
        {(() => {
          switch (window) {
            case 1:
              return (
                <div className={styles.firstContainer}>
                  <div className={styles.dataContainer}>
                    <div>
                      <p>Время</p>
                      <CustomDatePicker type={DatePickerTypes.Time} />
                    </div>
                    <div>
                      <p>Дата</p>
                      <CustomDatePicker type={DatePickerTypes.Date} />
                      <div className={styles.checkboxContainer}>
                        <Checkbox />
                        <span>Бессрочно</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className={styles.secondContainer}>
                  <span>Укажите место встречи</span>
                  <Input
                    label=''
                    type='text'
                    name='place'
                    value=''
                    onChange={() => {}}
                    placeholder='Например: ул. Нахимова, д.9, у подъезда №3'
                  />
                  <div className={styles.secondContainer__textContainer}>
                    <p>*</p>
                    <p className={styles.secondContainer__text}>
                      Будьте осторожны, если указываете домашний адрес,
                      <span className={styles.secondContainer__span}> не</span> пишите его полностью.
                    </p>
                  </div>
                  <div className={styles.mapContainer}>
                    <YMaps>
                      <MapRecepient />
                    </YMaps>
                  </div>
                </div>
              );
            case 3:
              return (
                <div className={styles.fhirdContainer}>
                  <p className={styles.fhirdContainer__text}>Выберите тип задачи</p>
                  <Select value='Выберите тип задачи' elementsList={['Хорошая задача', 'Офигенная задача']} />
                  <p className={styles.fhirdContainer__text}>Опишите задачу</p>
                  <Textarea label='' />
                </div>
              );
            case 4:
              return (
                <div className={styles.fourthContainer}>
                  <div className={styles.fourthContainer__date}>
                    <span>24.09.2022</span>
                    <span>16:00</span>
                  </div>
                  <div className={styles.fourthContainer__place}>
                    <LocationIcon />
                    <span className={styles.fourthContainer__placeText}>ул. Нахимова, д.9, у подъезда №3</span>
                  </div>
                  <div className={styles.fourthContainer__navButon}>
                    <NavButton>категория</NavButton>
                  </div>
                  <div className={styles.fourthContainer__reportContainer}>
                    <p className={styles.fourthContainer__title}>Выгулять собаку</p>
                    <p className={styles.fourthContainer__report}>
                      Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут.
                      Помогите, пожалуйста!
                    </p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
        <div className={styles.button}>
          <Button onClick={onClick}>Продолжить</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateApplicationPopup;
