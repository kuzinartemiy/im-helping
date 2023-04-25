import { type FC } from 'react';
import styles from './aplication-card.module.scss';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location-transparent.svg';
import { ReactComponent as ComplitedAplications } from '../../assets/icons/finished-applications.svg';
import CategoryBar from '../category-bar';
import Text from '../text';
import UserAvatar from '../user-avatar/user-avatar';
import ServiceButton from '../service-button/service-button';

interface IAplicationCard {
  id: string
  date?: string
  time?: string
  location?: string
  about?: string
  complitedAppQuantity?: string
  userName: string
  userAvatar: string
  userPhone: string
}

const AplicationCard: FC<IAplicationCard> = ({
  id,
  date,
  time,
  location,
  about,
  complitedAppQuantity,
  userName,
  userAvatar,
  userPhone,
}) => {
  return (
    <div className={styles.aplicationCard} id={id}>
      <div className={styles.aplicationCard__categoryBarContainer}>
        <CategoryBar children={<Text children='категория' color={'#FFFFFF'}/>} bgColor={'#9798C9'}/>
      </div>
      <div className={styles.aplicationCard__firstColumn}>
        <div className={styles.aplicationCard__mainInfo}>
          <div className={styles.aplicationCard__dateTimeLocation}>
            <div className={styles.aplicationCard__dateContainer}>
              <Calendar />
              <Text children={date} size={'24'} color={'#2E3192'} />
            </div>
            <div className={styles.aplicationCard__dateContainer}>
              <Clock />
              <Text children={time} size={'24'} color={'#2E3192'} />
            </div>
            <div className={styles.aplicationCard__dateContainer}>
              <LocationIcon />
              <Text children={location} size={'16'} color={'#2E3192'} />
            </div>
          </div>
          <div className={styles.aplicationCard__dateTimeLocation_type_smallScreen}>
            <div className={styles.aplicationCard__dateContainer}>
              <Calendar />
              <Text children={date} size={'16'} weight={'700'} color={'#2E3192'} />
            </div>
            <div className={styles.aplicationCard__timeContainer}>
              <Clock />
              <Text children={time} size={'16'} weight={'700'} color={'#2E3192'} />
            </div>
            <div className={styles.aplicationCard__locationContainer}>
              <LocationIcon />
              <Text children={location} size={'16'} weight={'700'} color={'#2E3192'} />
            </div>
          </div>
          <div className={styles.aplicationCard__about}>
            <Text children={'Заголовок'} size={'24'} color={'#2E3192'} />
            <div className={styles.aplicationCard__textContainer}>
              <p className={styles.aplicationCard__textAbout}>{about}</p>
              <p><a className={styles.aplicationCard__textAboutLink} href='*'>читать</a></p>
            </div>
            <div className={styles.aplicationCard__completedQuantity}>
              <ComplitedAplications width={'32px'} height={'32px'}/>
              <Text children={complitedAppQuantity} color={'#2E3192'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aplicationCard__userColumn}>
        <UserAvatar src={ userAvatar } />
        <Text children={userName} align={'center'} />
        <Text children={userPhone} />
      </div>
      <div className={styles.aplicationCard__completedQuantity_type_smallScreen}>
        <ComplitedAplications width={'32px'} height={'32px'}/>
        <Text children={complitedAppQuantity} color={'#2E3192'}/>
      </div>
      <div className={styles.aplicationCard__buttonsColumn}>
        <ServiceButton />
        <ServiceButton viewType={'edit'}/>
      </div>
    </div>
  );
};

export default AplicationCard;
