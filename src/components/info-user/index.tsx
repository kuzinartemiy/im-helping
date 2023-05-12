import { type FC } from 'react';
import UserAvatar from '../user-avatar';
import styles from './info-user.module.scss';
import Text from '../common/text';
import { type IOwner } from '../../types';

interface IInfoUser {
  user: IOwner
}

export const InfoUser: FC<IInfoUser> = ({ user }) => {
  return (
    <>
      <div className={styles.avatar}>
        <UserAvatar src={user.avatar} width='52' height='52' />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoText}>
          <Text size='24' lineHeight='24px'>{user.name}</Text>
          <div className={styles.userInfoPhone}>
            <Text size='16' lineHeight='19px' weight='700'>Тел.:</Text>
            <Text size='16' lineHeight='19px'>{ user.phone }</Text>
          </div>
        </div>
      </div>
    </>
  );
};
