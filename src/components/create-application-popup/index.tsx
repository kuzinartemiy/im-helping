import { useEffect, useState } from 'react';
import Modal from '../modal';
import styles from './create-application-popup.module.scss';
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
import useForm from '../../hooks/useForm';

interface ICreateApplicationPopup {
  owner: {
    name: string
    avatar: string
    phone: string
  }
  onClose: () => void
}

const initState = {
  watch: new Date().toString(),
  data: new Date().toString(),
  time: false,
  adress: '',
  select: 'Выберите тип задачи',
};

const CreateApplicationPopup: React.FC<ICreateApplicationPopup> = ({
  owner,
  onClose,
}) => {
  const [window, setWindow] = useState(1);
  const { state, handleChange } = useForm(initState);
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setWindow(window < 4 ? window + 1 : 4);
    if (window === 4) onClose();
  };

  const checkDisabled = () => {
    if (window === 1) {
      return false;
    }

    if (window === 2) {
      if (state.adress !== initState.adress) return false;
      return true;
    }

    if (window === 3) {
      if (state.select !== initState.select) return false;
    }

    if (window === 4) return false;

    return true;
  };

  useEffect(() => {
    setDisabled(checkDisabled());
  }, [state, window]);

  const addNull = (num: number) => num >= 10 ? String(num) : `0${num}`;

  const getDate = () => {
    const data = new Date(state.data as string);
    return `${addNull(data.getDate())}.${addNull(data.getMonth())}.${String(data.getFullYear())}`;
  };

  const getTime = () => {
    const data = new Date(state.watch as string);
    return `${addNull(data.getHours())} : ${addNull(data.getMinutes())}`;
  };

  return (
    <Modal onClose={onClose}>
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
                      <DatePickerProd
                        type={'time'}
                        name={'watch'}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <p>Дата</p>
                      <DatePickerProd
                        type={'data'}
                        name={'data'}
                        onChange={handleChange}
                      />
                      <div className={styles.checkboxContainer}>
                        <Checkbox
                          name={'time'}
                          onChange={handleChange}
                        />
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
                    name={'adress'}
                    value={state.adress as string}
                    onChange={handleChange}
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
                    name={'select'}
                    value={state.select as string}
                    elementsList={['Уход', 'Строительство', 'Разное']}
                    onChange={handleChange}
                  />
                  <p className={styles.fhirdContainer__text}>Опишите задачу</p>
                  <Textarea label={''} />
                </div>
              );
            case 4:
              return (
                <div className={styles.fourthContainer}>
                  <div className={styles.fourthContainer__date}>
                    <span>{getTime()}</span>
                    <span>{getDate()}</span>
                  </div>
                  <div className={styles.fourthContainer__place}>
                    <LocationIcon />
                    <span className={styles.fourthContainer__placeText}>
                      {state.adress}
                    </span>
                  </div>
                  <div className={styles.fourthContainer__navButon}>
                    <NavButton>{state.select}</NavButton>
                  </div>
                  <div className={styles.fourthContainer__reportContainer}>
                    <p className={styles.fourthContainer__title}>
                      Откуда взять заголовок, если в текстовое поле просто вводится текст
                    </p>
                    <p className={styles.fourthContainer__report}>
                      здесь будет контент из TextArea
                    </p>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
        <div className={styles.button}>
          <Button
            onClick={onClick}
            disabled={disabled}
          >
            {window === 4 ? 'Опубликовать' : 'Продолжить'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateApplicationPopup;
