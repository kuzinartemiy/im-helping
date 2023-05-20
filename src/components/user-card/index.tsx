import styles from './user-card.module.scss';
import defaultAvatar from '../../assets/images/default-user.png';
import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

interface IUserCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string
  id: string
  phone: string
  avatar?: string
}

const UserCard = ({ name, id, phone, avatar = defaultAvatar }: IUserCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img className={styles.avatar} src={avatar} alt={avatar === defaultAvatar ? 'User Avatar' : name} />
        <div className={styles.cardContent}>
            <div className={styles.name}>{name}</div>
            <div className={styles.id}>ID {id}</div>
            <div className={styles.phone}><span className={styles.phoneKey}>Тел.:</span> {phone}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
