import { type FC } from 'react';
import styles from './chat.module.scss';
import UserAvatar from '../../user-avatar';
import Text from '../../common/text';
import { COLORS } from '../../../styles/colors';

interface IOwner {
  id: string
  name?: string
  avatar?: string
}

interface IChat {
  id: string
  owner: IOwner
  time?: string
  text?: string
  type?: string
  class?: string
}

interface IChatS {
  messages: IChat[]
}

const Chat: FC<IChatS> = ({ messages }) => {
  return (
    <ul className={styles.container}>
      {messages.map((item, index) => {
        if (item.type === 'message') {
          return (
            <li key={index} className={styles.rightMessage}>
              <UserAvatar src={item.owner.avatar} width={ '30' } height={ '30' } />
              <div className={`${styles.text} ${styles.right}`}>
                <Text children={item.text} size={ '12' } lineHeight={' 15px '} color={COLORS.get('background-popup')}/>
              </div>
            </li>
          );
        }
        if (item.type === 'response') {
          return (
            <li key={index} className={styles.leftMessage}>
              <UserAvatar src={item.owner.avatar} width={ '30' } height={ '30' } />
              <div className={`${styles.text} ${styles.left}`}>
                <Text children={item.text} size={ '12' } lineHeight={' 15px '} color={COLORS.get('background-popup')}/>
              </div>
          </li>
          );
        }
        if (item.type === 'typing') {
          return (
            <li key={index} className={styles.rightMessage}>
              <UserAvatar src={item.owner.avatar} width={ '30' } height={ '30' } />
              <div className={`${styles.text} ${styles.right}`}>
              <Text children={'печатает сообщение...'} size={ '12' } lineHeight={' 15px '} color={COLORS.get('background-popup')}/>
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
