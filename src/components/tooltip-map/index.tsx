import styles from './tooltip-map.module.scss';
import { COLORS } from '../../styles/colors';
import UserAvatar from '../user-avatar';
import Text from '../common/text';
import { ReactComponent as Status } from '../../assets/icons/balls.svg';
import Button from '../common/button';
import { type IApplicationCard } from '../../types';
import { hideNumber } from '../../helpers/hide-number.helper';

interface IToolTipMapProps {
  cardData: IApplicationCard
}

const TooltipMap = ({ cardData }: IToolTipMapProps) => {
  return (
    <div className={styles.tooltipMap} id={cardData.id}>
      <div className={styles.tooltipMap__userInfo}>
        <UserAvatar src={cardData.owner.avatar} />
        <div className={styles.tooltipMap__userInfoText}>
          <Text size='20' lineHeight='24px'>{cardData.owner.name}</Text>
          <Text size='16' lineHeight='19px'>{hideNumber(cardData.owner.phone)}</Text>
        </div>
      </div>
      <div className={styles.tooltipMap__about}>
        <p className={styles.tooltipMap__textAbout}>{cardData.about}</p>
        <p>
          <a className={styles.tooltipMap__textAboutLink} href='*'>читать</a>
        </p>
      </div>
      <div className={styles.tooltipMap__status}>
        <Text color={COLORS.get('color-primary')} size='24' lineHeight='29px'>{cardData.completedAppQuantity}</Text>
        <Status width='42px' height='30px' />
      </div>
        <Button onClick={cardData.onButtonClick}>
          <Text color={COLORS.get('white')} align='center'>Откликнуться</Text>
        </Button>
    </div>
  );
};

export default TooltipMap;
