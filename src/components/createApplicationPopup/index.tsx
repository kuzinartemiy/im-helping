import { useState } from 'react';
import Modal from '../modal';
import styles from './createApplicationPopup.module.scss';
import UserAvatar from '../user-avatar/user-avatar';
import Text from '../text';
import DatePickerProd from '../datepicker_prod';
import Checkbox from '../checkbox';
import Button from '../button';
import Input from '../input/input';
import Select from '../select';
import Textarea from '../textarea/textarea';
import { ReactComponent as LocationIcon } from '../../assets/icons/small-location.svg';
import NavButton from '../nav-button';

interface ICreateApplicationPopup {
  owner: {
    name: string
    avatar: string
    phone: string
  }
}

const CreateApplicationPopup: React.FC<ICreateApplicationPopup> = ({
  owner,
}) => {
  const [window, setWindow] = useState(1);

  const onClick = () => {
    setWindow(window < 4 ? window + 1 : 4);
  };
  return (
    <Modal
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
    >
      <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
          <div className={styles.documentsPopup__avatar}>
            <UserAvatar
              src={owner.avatar}
              width={'52'}
              height={'52'}
            />
          </div>
          <div className={styles.documentsPoupup__userInfo}>
            <div className={styles.documentsPoupup__userInfoText}>
              <Text
                children={owner.name}
                size={'24'}
                lineHeight={'24px'}
              />
              <div className={styles.documentsPoupup__userInfoPhone}>
                <Text
                  children={'Тел.:'}
                  size={'16'}
                  lineHeight={' 19px '}
                  weight={'700'}
                />
                <Text
                  children={owner.phone}
                  size={'16'}
                  lineHeight={' 19px '}
                />
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
                      <DatePickerProd type={'time'} />
                    </div>
                    <div>
                      <p>Дата</p>
                      <DatePickerProd type={'data'} />
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
                    label={''}
                    type={'text'}
                    name={'place'}
                    value={''}
                    onChange={() => {}}
                    placeholder={'Например: ул. Нахимова, д.9, у подъезда №3'}
                  />
                  <div className={styles.secondContainer__textContainer}>
                    <p>*</p>
                    <p className={styles.secondContainer__text}>
                      Будте осторожны, если указываете домашнй адресс,
                      <span className={styles.secondContainer__span}>
                        не
                      </span>{' '}
                      пишите его полностью.
                    </p>
                  </div>
                  <div className={styles.mapContainer}></div>
                </div>
              );
            case 3:
              return (
                <div className={styles.fhirdContainer}>
                  <p className={styles.fhirdContainer__text}>
                    Выберите тип задачи
                  </p>
                  <Select
                    value={'Выберите тип задачи'}
                    elementsList={['Хорошая задача', 'Офигенная задача']}
                  />
                  <p className={styles.fhirdContainer__text}>Опишите задачу</p>
                  <Textarea label={''} />
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
                    <span className={styles.fourthContainer__placeText}>
                      ул. Нахимова, д.9, у подъезда №3
                    </span>
                  </div>
                  <div className={styles.fourthContainer__navButon}>
                    <NavButton>категория</NavButton>
                  </div>
                  <div className={styles.fourthContainer__reportContainer}>
                    <p className={styles.fourthContainer__title}>
                      Выгулять собаку
                    </p>
                    <p className={styles.fourthContainer__report}>
                      Заболел и совсем нет сил даже ходить по квартире. Почти
                      неделю собаку выгуливали соседи, но в пятницу они не
                      смогут. Помогите, пожалуйста!
                    </p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
        <div className={styles.button}>
          <Button onClick={onClick}>{'Продолжить'}</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateApplicationPopup;
