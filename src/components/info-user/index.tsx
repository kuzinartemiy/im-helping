import { type FC } from 'react';
import UserAvatar from '../user-avatar';
import styles from './info-user.module.scss';
import Text from '../common/text';

interface IInfoUser {
  data: any
}

export const InfoUser: FC<IInfoUser> = ({ data }) => {
  return (
    <>
      <div className={styles.avatar}><UserAvatar src={data.avatar} width={ '52' } height={ '52' } /></div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoText}>
          <Text children={ data.name } size={ '24' } lineHeight={ '24px' } />
          <div className={styles.userInfoPhone}>
            <Text children={ 'Тел.:' } size={ '16' } lineHeight={' 19px '} weight={ '700' } />
            <Text children={ data.phone } size={ '16' } lineHeight={' 19px '} />
          </div>
        </div>
      </div>
    </>
  );
};
