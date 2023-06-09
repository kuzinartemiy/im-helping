import { type FC, useState, type SyntheticEvent } from 'react';
import styles from './chatBlock.module.scss';
import Button from '../common/button';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { ReactComponent as VectorIcon } from '../../assets/icons/vector.svg';
import Input from '../common/input';
import { InfoUser } from '../info-user';
import Chat from './chat';
import { type IMessage, type IOwner } from '../../types';

interface IChat {
  user: IOwner;
  messages: IMessage[];
}

export const ChatBlock: FC<IChat> = ({ user, messages }) => {
  const [chatInput, setChatInput] = useState('');

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => setChatInput(e.target.value);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    setChatInput('');
  };

  return (
    <div className={styles.container}>
      <InfoUser user={user} />
      <div className={styles.chatContainer}>
        <Chat messages={messages} />
        <div className={styles.button}>
          <div className={styles.inputContainer}>
            <Input
              label={''}
              type={'text'}
              name={'chat'}
              value={chatInput}
              onChange={handlerChange}
              placeholder={'Напишите сообщение...'}
              isError={false}
              errorMessage={'сообщение не должно быть пустым'}
              padding={'10px 20px'}
            />
            <button className={styles.buttonFile}>
              <VectorIcon />
            </button>
          </div>

          <div className={styles.buttonContainer}>
            <Button size='small' height='42' onClick={handleSubmit}>
              <div className={styles.buttonInner}>
                <SendIcon />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBlock;
