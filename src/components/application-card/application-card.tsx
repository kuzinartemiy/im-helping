import { type FC } from 'react';
import styles from './application-card.module.scss';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location-transparent.svg';
import { ReactComponent as ComplitedAplications } from '../../assets/icons/finished-applications.svg';
import { ReactComponent as Message } from '../../assets/icons/message.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import CategoryBar from '../category-bar';
import Text from '../text';
import UserAvatar from '../user-avatar/user-avatar';
import ServiceButton from '../service-button';
import CircleButton from '../circle-button';

interface IApplicationCard {
  cardData: any
  id?: string
  date?: string
  time?: string
  location?: string
  about?: string
  completedAppQuantity?: string
  owner?: IOwner
}

interface IOwner {
  name?: string
  avatar?: string
  phone?: string
}

const ApplicationCard: FC<IApplicationCard> = ({ cardData }) => {
  return (
    <div className={ styles.applicationCard } id={ cardData.id }>
      <div className={ styles.applicationCard__categoryBarContainer }>
        <CategoryBar children={ <Text children='категория' color={ '#FFFFFF' }/> } bgColor={ '#9798C9' }/>
      </div>
      <div className={ styles.applicationCard__dateTimeLocation }>
        <div className={ styles.applicationCard__dateContainer }>
          <Calendar />
          <Text children={ cardData.date } size={ '24' } color={ '#2E3192' } />
        </div>
        <div className={ styles.applicationCard__dateContainer }>
          <Clock />
          <Text children={ cardData.time } size={ '24' } color={ '#2E3192' } />
        </div>
        <div className={ styles.applicationCard__dateContainer }>
          <LocationIcon />
          <Text children={ cardData.location } size={ '16' } color={ '#2E3192' } />
        </div>
      </div>
      <div className={ styles.applicationCard__about }>
        <Text children={ 'Заголовок'} size={ '24' } color={ '#2E3192'} />
        <div className={ styles.applicationCard__textContainer }>
          <p className={ styles.applicationCard__textAbout }>{ cardData.about }</p>
          <p><a className={ styles.applicationCard__textAboutLink } href='*'>читать</a></p>
        </div>
        <div className={styles.applicationCard__completedQuantity }>
          <ComplitedAplications width={'32px' } height={'32px' }/>
          <Text children={ cardData.completedAppQuantity } color={'#2E3192' }/>
        </div>
      </div>
      <div className={ styles.applicationCard__userColumn }>
        <UserAvatar src={ cardData.owner.avatar} />
        <Text children={ cardData.owner.name } align={ 'center' } />
        <Text children={ cardData.owner.phone } />
        <div className={ styles.applicationCard__userColumnBtns }>
          <CircleButton children={ <Message /> } />
          <CircleButton children={ <Phone /> } />
        </div>
      </div>
      <div className={ styles.applicationCard__buttonsColumn}>
        <ServiceButton />
        <ServiceButton viewType={ 'edit' }/>
      </div>
    </div>
  );
};

export default ApplicationCard;
