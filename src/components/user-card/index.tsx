import type React from 'react';
import styles from './user-card.module.scss';
import defaultAvatar from '../../assets/images/default-user.png';

interface UserCardProps {
  name: string
  id: string
  phone: string
  avatar?: string
  onClick?: () => void
}

const UserCard: React.FC<UserCardProps> = ({ name, id, phone, avatar = defaultAvatar, onClick }) => {
  return (
    <div className={styles.cardWrapper} onClick={onClick}>
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
