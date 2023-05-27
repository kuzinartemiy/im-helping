import styles from './admin-privileges-card.module.scss';
import defaultAvatar from '../../assets/images/default-user.png';
import { useState } from 'react';
import Checkbox from '../common/checkbox';

interface IAdminPrivilegesCardProps {
  name: string;
  id: string;
  phone: string;
  avatar?: string;
  confirmAccountsProp?: boolean;
  createRequestsProp?: boolean;
  distributeKeysProp?: boolean;
}

const AdminPrivilegesCard = ({ name, id, phone, avatar = defaultAvatar }: IAdminPrivilegesCardProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img className={styles.avatar} src={avatar} alt={avatar === defaultAvatar ? 'User Avatar' : name} />
        <div className={styles.cardContent}>
          <div className={styles.name}>{name}</div>
          <div className={styles.id}>ID {id}</div>
          <div className={styles.phone}>
            <span className={styles.phoneKey}>Тел.:</span> {phone}
          </div>
        </div>
        <div className={styles.dropdownParent}>
          <hr className={styles.line} />
          <span className={`${styles.dropdownIconDown} ${open ? styles.dropdownIconUp : ''}`} onClick={handleClick}></span>
        </div>
        <ul className={`${styles.list} ${open ? styles.open : ''}`}>
          <li>
            <Checkbox>Подтверждать аккаунты</Checkbox>
          </li>
          <li>
            <Checkbox>Создавать заявки</Checkbox>
          </li>
          <li>
            <Checkbox>Раздавать ключи</Checkbox>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPrivilegesCard;
