import { useRef, type DetailedHTMLProps, useState } from 'react';
import styles from './profile-settings.module.scss';
import { useStore } from '../../../services/store';
import { shallow } from 'zustand/shallow';
import Button from '../../common/button';

interface IProfileSettingsProps
  extends DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  onClose: () => void
}

const ProfileSettings = ({ onClose }: IProfileSettingsProps) => {
  const {
    getAvatar,
    getName,
    getNumber,
    getAbout,
    changeName,
    changeNumber,
    changeAbout,
    changeAvatar,
  } = useStore(
    (state) => ({
      getAvatar: state.userAvatar,
      getName: state.userName,
      getNumber: state.userNumber,
      getAbout: state.userAbout,
      changeName: state.changeName,
      changeNumber: state.changeNumber,
      changeAbout: state.changeAbout,
      changeAvatar: state.changeAvatar,
    }),
    shallow,
  );

  const inputRef = useRef(null);
  const [avatarValue, setAvatarValue] = useState(getAvatar);
  const [nameValue, setNameValue] = useState(getName);
  const [numberValue, setNumberValue] = useState(getNumber);
  const [aboutValue, setAboutValue] = useState(getAbout);

  const saveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    changeAvatar(avatarValue);
    changeName(nameValue);
    changeNumber(numberValue);
    changeAbout(aboutValue);
    onClose();
  };

  return (
    <div className={styles.profileSettings}>
      <ul className={styles.profileSettingsList}>
        <li className={styles.profileChangeItem}>
          <img src={avatarValue} alt="avatar" className={styles.personAvatar} />
          <input
            className={styles.photoChangeInput}
            ref={inputRef}
            type="url"
            onChange={(e) => setAvatarValue(e.target.value)}
            placeholder={'Изменить фото'}
          />
        </li>
        <li className={styles.profileChangeItem}>
          <div className={styles.labelWrapper}>
            <label className={styles.inputLabel}>Имя:</label>
          </div>
          <input
            className={styles.profileChangeInput}
            type="text"
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            placeholder={'Введите имя'}
          />
        </li>
        <li className={styles.profileChangeItem}>
          <div className={styles.labelWrapper}>
            <label className={styles.inputLabel}>Тел.:</label>
          </div>
          <input
            className={styles.profileChangeInput}
            type="tel"
            onChange={(e) => setNumberValue(e.target.value)}
            value={numberValue}
            placeholder={'Введите тел. номер'}
          />
        </li>
        <li className={styles.profileChangeItem}>
          <div className={styles.labelWrapper}>
            <label className={styles.inputLabel}>О себе:</label>
          </div>
          <textarea
            className={styles.profileChangeInput}
            onChange={(e) => setAboutValue(e.target.value)}
            value={aboutValue}
            placeholder={'Введите информацию о себе'}
          />
        </li>
        <li className={styles.profileChangeItem}>
          <div className={styles.labelWrapper}>
          </div>
          <div className={styles.saveButton}>
                  <Button onClick={saveChanges}>Сохранить</Button>
          </div>
        </li>
        <li className={styles.profileChangeItem}>
          <div className={styles.labelWrapper}>
          </div>
                  <Button viewType="secondary" onClick={onClose}>Выход</Button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSettings;
