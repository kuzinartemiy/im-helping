import { type FC } from 'react';
import styles from './tooltip-map.module.scss';

/* interface IToolTipMap {
  id: string
  name: string
  phone: string
  avatar?: string
} */

const TooltipMap: FC/* <IToolTipMap> */ = () => {
  return (
    <div className={styles.tolltipMap}>
      <div className={styles.tolltipMap__userInfo}>
      </div>
      <div className={styles.tolltipMap__about}></div>
      <div className={styles.tolltipMap__status}></div>
    </div>
  );
};

export default TooltipMap;
