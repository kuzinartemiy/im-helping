import styles from './application-card.module.scss';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location-transparent.svg';
import { ReactComponent as ComplitedAplications } from '../../assets/icons/finished-applications.svg';
import { ReactComponent as Message } from '../../assets/icons/message.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import CategoryBar from '../common/category-bar';
import Text from '../common/text';
import UserAvatar from '../user-avatar';
import CircleButton from '../common/circle-button';
import { COLORS } from '../../styles/colors';
import ServiceButton from '../common/service-button';
import { type IApplicationCard } from '../../types';

interface IApplicationCardProps {
  card: IApplicationCard;
}

const ApplicationCard = ({ card }: IApplicationCardProps) => {
  return (
    <div className={styles.applicationCard} id={card.id}>
      <div className={styles.applicationCard__categoryBarContainer}>
        <CategoryBar bgColor={COLORS.get('color-secondary')}>
          <Text color={COLORS.get('white')}>категория</Text>
        </CategoryBar>
      </div>
      <div className={styles.applicationCard__dateTimeLocation}>
        <div className={styles.applicationCard__dateContainer}>
          <Calendar />
          <Text size='24' color={COLORS.get('color-primary')}>
            {card.date}
          </Text>
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <Clock />
          <Text size='24' color={COLORS.get('color-primary')}>
            {card.time}
          </Text>
        </div>
        <div className={styles.applicationCard__dateContainer}>
          <LocationIcon />
          <Text size='16' color={COLORS.get('color-primary')}>
            {card.location}
          </Text>
        </div>
      </div>
      <div className={styles.applicationCard__about}>
        <Text size='24' color={COLORS.get('color-secondary')}>
          Заголовок
        </Text>
        <div className={styles.applicationCard__textContainer}>
          <p className={styles.applicationCard__textAbout}>{card.about}</p>
          <p>
            <a className={styles.applicationCard__textAboutLink} href='*'>
              Читать
            </a>
          </p>
        </div>
        <div className={styles.applicationCard__completedQuantity}>
          <ComplitedAplications width='32px' height='32px' />
          <Text color={COLORS.get('color-primary')}>{card.completedAppQuantity}</Text>
        </div>
      </div>
      <div className={styles.applicationCard__userColumn}>
        <UserAvatar src={card.owner.avatar} />
        <div className={styles.applicationCard__userColumn_name}>
          <Text align='center' size='16' lineHeight='19px'>
            {card.owner.name}
          </Text>
        </div>
        <Text color={COLORS.get('color-primary')} size='16'>
          {card.owner.phone}
        </Text>
        <div className={styles.applicationCard__userColumnBtns}>
          {card.type !== 'completed' ? (
            <>
              <CircleButton>
                <Message />
              </CircleButton>
              <CircleButton>
                <Phone />
              </CircleButton>
            </>
          ) : (
            <>
              <CircleButton disabled={true}>
                <Message />
              </CircleButton>
              <CircleButton disabled={true}>
                <Phone />
              </CircleButton>
            </>
          )}
        </div>
      </div>
      {card.type !== 'completed' && (
        <div className={styles.applicationCard__buttonsColumn}>
          <ServiceButton />
          <ServiceButton viewType='edit' />
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;
