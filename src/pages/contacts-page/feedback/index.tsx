import TopPanel from '../../../components/top-panel';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import styles from '../contactsPage.module.scss';
import Button from '../../../components/common/button';
import { type ChangeEvent, useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <>
      <TopPanel titleIcon={<Message width={43} height={35} className={styles.colorBlueIcon} />} title="Напишите нам" filter={false}/>
      <div className={styles.feedback}>
        <form name="feedback" className={styles.form} id="feedback" noValidate>
          <fieldset className={styles.form__edit}>
            <p className={styles.form__label}>ФИО</p>
            <input type="text" id="name" className={styles.form__input} placeholder="Иванов Иван Иванович" required value={name} onChange={onChangeName} />
            <p className={styles.form__label}>Эмейл</p>
            <input type="email" id="description" className={styles.form__input} placeholder="www@yandex.ru" required value={description} onChange={onChangeDescription} />
            <p className={styles.form__label}>Комментарий</p>
            <textarea id="comments" className={styles.form__input} placeholder="Задайте Ваш вопрос" rows={6} required value={comment} onChange={onChangeComment} />
          </fieldset>
          <div className={styles.form__button}>
            <Button type="submit" disabled={comment.length < 1 || name.length < 1 || description.length < 1} size={'small'}>{'Отправить'}</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
