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

interface IApplicationCard {
  id: string
  date?: string
  time?: string
  location?: string
  about?: string
  completedAppQuantity?: string
  userName: string
  userAvatar: string
  userPhone: string
}

const ApplicationCard: FC<IApplicationCard> = ({
  id,
  date,
  time,
  location,
  about,
  completedAppQuantity,
  userName,
  userAvatar,
  userPhone,
}) => {
  return (
    <div className={styles.applicationCard} id={id}>
      <div className={styles.applicationCard__categoryBarContainer}>
        <CategoryBar children={<Text children='категория' color={'#FFFFFF'}/>} bgColor={'#9798C9'}/>
      </div>
      <div className={styles.applicationCard__dateTimeLocation}>
        <div className={styles.applicationCard__dateContainer}>
          <Calendar />
          <Text children={date} size={'24'} color={'#2E3192'} />
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <Clock />
          <Text children={time} size={'24'} color={'#2E3192'} />
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <LocationIcon />
          <Text children={location} size={'16'} color={'#2E3192'} />
        </div>
      </div>
      <div className={styles.applicationCard__about}>
        <Text children={'Заголовок'} size={'24'} color={'#2E3192'} />
        <div className={styles.applicationCard__textContainer}>
          <p className={styles.applicationCard__textAbout}>{about}</p>
          <p><a className={styles.applicationCard__textAboutLink} href='*'>читать</a></p>
        </div>
        <div className={styles.applicationCard__completedQuantity}>
          <ComplitedAplications width={'32px'} height={'32px'}/>
          <Text children={completedAppQuantity} color={'#2E3192'}/>
        </div>
      </div>
      <div className={styles.applicationCard__userColumn}>
        <UserAvatar src={ userAvatar } />
        <Text children={userName} align={'center'} />
        <Text children={userPhone} />
      </div>
      <div className={styles.applicationCard__buttonsColumn}>
        <ServiceButton />
        <ServiceButton viewType={'edit'}/>
      </div>
    </div>
  );
};

export default ApplicationCard;
