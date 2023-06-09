import { type FC } from 'react';
import styles from './chat.module.scss';
import UserAvatar from '../../user-avatar';
import Text from '../../common/text';
import { COLORS } from '../../../styles/colors';
import { type IMessage } from '../../../types';

interface IChatS {
  messages: IMessage[];
}

const Chat: FC<IChatS> = ({ messages }) => {
  return (
    <ul className={styles.container}>
      {messages.map((item, index) => {
        if (item.type === 'message') {
          return (
            <li key={index} className={styles.rightMessage}>
              <UserAvatar src={item.owner.avatar} width={'30'} height={'30'} />
              <div className={`${styles.text} ${styles.right}`}>
                <Text size='12' lineHeight='15px' color={COLORS.get('white')}>
                  {item.text}
                </Text>
              </div>
            </li>
          );
        }
        if (item.type === 'response') {
          return (
            <li key={index} className={styles.leftMessage}>
              <UserAvatar src={item.owner.avatar} width={'30'} height={'30'} />
              <div className={`${styles.text} ${styles.left}`}>
                <Text size='12' lineHeight='15px' color={COLORS.get('white')}>
                  {item.text}
                </Text>
              </div>
            </li>
          );
        }
        if (item.type === 'typing') {
          return (
            <li key={index} className={styles.rightMessage}>
              <UserAvatar src={item.owner.avatar} width={'30'} height={'30'} />
              <div className={`${styles.text} ${styles.right}`}>
                <Text size={'12'} lineHeight={' 15px '} color={COLORS.get('white')}>
                  печатает сообщение...
                </Text>
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Chat;
