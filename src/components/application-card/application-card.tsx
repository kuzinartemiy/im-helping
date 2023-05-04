import { type FC } from 'react';
import styles from './application-card.module.scss';
import { type IApplicationCard } from '../../utils/types/dataTypes';
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
import { COLORS } from '../../styles/colors';

const ApplicationCard: FC<IApplicationCard> = ({ cardData, type = 'active' }) => {
  return (
    <div className={styles.applicationCard} id={cardData.id}>
      <div className={styles.applicationCard__categoryBarContainer}>
        <CategoryBar bgColor={COLORS.get('color-secondary')}>
          <Text color={COLORS.get('background-popup')}>категория</Text>
        </CategoryBar>
      </div>
      <div className={ styles.applicationCard__dateTimeLocation }>
        <div className={ styles.applicationCard__dateContainer }>
          <Calendar />
          <Text size='24' color={COLORS.get('color-primary')}>{cardData.date}</Text>
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <Clock />
          <Text size='24' color={COLORS.get('color-primary')}>{cardData.time}</Text>
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <LocationIcon />
          <Text size='16' color={COLORS.get('color-primary')}>{cardData.location}</Text>
        </div>
      </div>
      <div className={ styles.applicationCard__about }>
        <Text children='Заголовок' size='24' color={COLORS.get('color-secondary')} />
        <div className={ styles.applicationCard__textContainer }>
          <p className={ styles.applicationCard__textAbout }>{ cardData.about }</p>
          <p><a className={ styles.applicationCard__textAboutLink } href='*'>Читать</a></p>
        </div>
        <div className={styles.applicationCard__completedQuantity }>
          <ComplitedAplications width='32px' height='32px' />
          <Text children={ cardData.completedAppQuantity } color={COLORS.get('color-primary')}/>
        </div>
      </div>
      <div className={ styles.applicationCard__userColumn }>
        <UserAvatar src={ cardData.owner.avatar} />
        <div className={ styles.applicationCard__userColumn_name }><Text children={ cardData.owner.name } align='center' size='16' lineHeight='19px'/></div>
        <Text children={ cardData.owner.phone } color={COLORS.get('color-primary')} size='16'/>
        <div className={ styles.applicationCard__userColumnBtns }>
          { type === 'active'
            ? (
          <><CircleButton >
              <Message />
            </CircleButton><CircleButton>
                <Phone />
              </CircleButton></>)
            : (<><CircleButton disabled = {true}>
              <Message />
            </CircleButton><CircleButton disabled = {true}>
                <Phone />
              </CircleButton></>)}
        </div>
      </div>
      { type === 'active' &&
      <div className={ styles.applicationCard__buttonsColumn}>
        <ServiceButton />
        <ServiceButton viewType='edit' />
      </div>}
    </div>
  );
};

export default ApplicationCard;
