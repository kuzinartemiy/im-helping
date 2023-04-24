import styles from './admin-default.module.scss';
import testImg1 from '../../../src/assets/images/logo192.png';

interface IAdminDefaultProps {
  children?: React.ReactNode
  userImg: string
  userName: string
  userId: string
  userTel: string
  userPoints: string
  userKey: string
  userHelps: string
  lineColor: string
}

const AdminDefault = (props: IAdminDefaultProps) => {
  let lineItemsColor;
  switch (props.lineColor) {
    case 'green':
      lineItemsColor = 'lineItemsGreen';
      break;
    case 'orange':
      lineItemsColor = 'lineItemsOrange';
      break;
    case 'grey':
      lineItemsColor = 'lineItemsGrey';
      break;
    default:
      lineItemsColor = 'lineItemsOrange';
  }
  return (
    <div className={styles.adminDefault}>
      <img alt={props.userName} src={props.userImg} className={styles.avatar}/>
      <div className={styles.adminChild}>
        <p className={styles.userName}>{props.userName}</p>
        <p className={styles.userId}>{props.userId}</p>
        <div className={styles.userTel}>
          <p className={styles.userTelChild}>Тел:</p>
          <p className={styles.userTelVar}>{props.userTel}</p>
        </div>
        <div className={styles.lineItems + ' ' + lineItemsColor}>
          <p className={styles.userPoints}>{props.userPoints}</p>
          <p className={styles.userKey}>{props.userKey}</p>
          <p className={styles.userHelps}>{props.userHelps}</p>
        </div>
      </div>
    </div>
  );
};

AdminDefault.defaultProps = {
  userImg: testImg1,
  userName: 'Петров Петр Петрович',
  userId: '11111114',
  userTel: '+7(000) 000-00-04',
  userPoints: '2500',
  userKey: '1',
  userHelps: '150',
  lineColor: 'green',
};

export default AdminDefault;
