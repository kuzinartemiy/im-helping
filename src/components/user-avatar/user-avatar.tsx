/* import styles from './user-avatar.module.scss'; */
import { type FC } from 'react';
/* import defaultAvatar from '../../assets/images/default-avatar.png'; */

interface IUserAvatar {
  src: any
  width?: string
  height?: string
}

const UserAvatar: FC<IUserAvatar> = ({ src, width = '100', height = '100' }) => {
  return (
    <img alt='Аватар пользователя' src={ src } style={{
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: '50%',
    }} />
  );
};

export default UserAvatar;
