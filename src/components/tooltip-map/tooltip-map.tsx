import { type FC } from 'react';
import styles from './tooltip-map.module.scss';
import { COLORS } from '../../styles/colors';
import { type IToolTipMap } from '../../utils/types/dataTypes';
import { hideNumber } from './utils/hideNumber';
import UserAvatar from '../user-avatar/user-avatar';
import Text from '../text';
import { ReactComponent as Status } from '../../assets/icons/balls.svg';
import Button from '../button';

const TooltipMap: FC<IToolTipMap> = ({ cardData }) => {
  return (
    <div className={styles.tolltipMap} id={ cardData.id}>
      <div className={styles.tolltipMap__userInfo}>
        <UserAvatar src={cardData.owner.avatar} />
        <div className={styles.tolltipMap__userInfoText}>
          <Text children={ cardData.owner.name } size={ '20' } lineHeight={ '24px' } />
          <Text children={ hideNumber(cardData.owner.phone) } size={ '16' } lineHeight={' 19px '} />
        </div>
      </div>
      <div className={styles.tolltipMap__about}>
        <p className={ styles.tolltipMap__textAbout }>{ cardData.about }</p>
        <p><a className={ styles.tolltipMap__textAboutLink } href='*'>читать</a></p>
      </div>
      <div className={styles.tolltipMap__status}>
        <Text children={ cardData.completedAppQuantity } color={'#2E3192' } size={ '24' } lineHeight={ '29px' } />
        <Status width='42px' height='30px' />
      </div>
        <Button children={ <Text children={ 'Откликнуться' } color={ COLORS.get('background-popup') } align={ 'center' } />} />
    </div>
  );
};

export default TooltipMap;
