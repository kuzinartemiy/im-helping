import styles from './thanks-popup.module.scss';
import thanksImage from '../../../assets/images/thanks.svg';

const ThanksPopup = () => {
  return (
    <div className={styles.thanksWrapper}>
      <p className={styles.thanksText}>
        Благодарю за отзывчивость
      </p>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={thanksImage} alt='thanks'/>
      </div>
    </div>
  );
};

export default ThanksPopup;
