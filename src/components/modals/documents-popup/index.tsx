import { type FC } from 'react';
import styles from './documents-popup.module.scss';
import { COLORS } from '../../../styles/colors';
import UserAvatar from '../../user-avatar';
import Text from '../../common/text';
import Button from '../../common/button';
import { ReactComponent as AttachIcon } from '../../assets/icons/attach.svg';
import Textarea from '../../common/textarea';

interface IDocumentsPopup {
  data: any
  id: string
  name?: string
  phone?: string
  avatar?: string
}

export const DocumentsPopup: FC<IDocumentsPopup> = ({ data }) => {
  return (
    <div className={styles.documentsPoupup}>
      <div className={styles.documentsPoupup__avatar}><UserAvatar src={data.owner.avatar} width={ '52' } height={ '52' } /></div>
      <div className={styles.documentsPoupup__userInfo}>
        <div className={styles.documentsPoupup__userInfoText}>
          <Text children={ data.owner.name } size={ '24' } lineHeight={ '24px' } />
          <div className={styles.documentsPoupup__userInfoPhone}>
            <Text children={ 'Тел.:' } size={ '16' } lineHeight={' 19px '} weight={ '700' } />
            <Text children={ data.owner.phone } size={ '16' } lineHeight={' 19px '} />
          </div>
        </div>
      </div>
      <div className={styles.documentsPoupup__textAreaContainer}>
        <Textarea
          placeholder={ 'Например: Отправляю Вам скан медицинской справки, паспорта и свидетельства о  рождении.' }
          maxLength={ 256 }
        />
        <div className={styles.documentsPoupup__button}>
          <Button
            width={ '126' }
            children={
              <div className={styles.documentsPoupup__buttonInner}>
                <AttachIcon />
                <Text children={'Прикрепить'} color={COLORS.get('white')} align={'center'} />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsPopup;
