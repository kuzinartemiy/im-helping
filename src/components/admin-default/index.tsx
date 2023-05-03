import styles from './admin-default.module.scss';
import testImg1 from '../../../src/assets/images/logo192.png';
import Button from '../button';

interface IAdminDefaultProps {
  children?: React.ReactNode
  userImg: string
  userName: string
  userId: string
  userTel: string
  userPoints: string
  userKey?: string
  userHelps: string
  lineColor: string
}

const AdminDefault = (props: IAdminDefaultProps) => {
  const isKey = props.userKey;
  let lineItemsColor;
  switch (props.lineColor) {
    case 'green':
      lineItemsColor = styles.lineItemsGreen;
      break;
    case 'orange':
      lineItemsColor = styles.lineItemsOrange;
      break;
    case 'grey':
      lineItemsColor = styles.lineItemsGrey;
      break;
    default:
      lineItemsColor = styles.lineItemsOrange;
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
        <div className={styles.lineItems}>
          <p className={styles.userPoints}>{props.userPoints}</p>
          { (isKey != null) ? <p className={styles.userKey}>{props.userKey}</p> : <div className="hidden-block"></div>}
          <p className={styles.userHelps}>{props.userHelps}</p>
        </div>
        <div className={styles.buttons}>
          <Button viewType='secondary'>Подтвердить</Button>
          <Button>Заблокировать</Button>
          <Button>Дать ключи</Button>
        </div>
      </div>
      <div className={lineItemsColor}></div>
    </div>
  );
};

AdminDefault.defaultProps = {
  userImg: testImg1,
  userName: 'Петров Петр Петрович',
  userId: '11111114',
  userTel: '+7(000) 000-00-04',
  userPoints: '2500',
  userHelps: '150',
  userKey: '1',
  lineColor: 'green',
  confirmed: 'confirmed',
};

export default AdminDefault;
