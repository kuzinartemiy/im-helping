// import { type SyntheticEvent, type DetailedHTMLProps } from 'react';
import { useRef, type DetailedHTMLProps, useState } from 'react';
import styles from './profile-settings.module.scss';
import useStore from '../store';
import { shallow } from 'zustand/shallow';

interface IProfileSettingsProps
  extends DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  // viewType?: 'close' | 'edit' | 'approved'
  // onClick?: (() => void) | ((e: SyntheticEvent) => void)
}

// const ProfileSettings = ({ onClick, viewType = 'close', ...props }: IProfileSettingsProps) => (
const ProfileSettings = ({ children }: IProfileSettingsProps) => {
  // const { getAvatar, getName, changeName, changeAvatar } = useStore((state) => ({
  //   getAvatar: state.userAvatar,
  //   getName: state.userName,
  //   changeName: state.changeName,
  //   changeAvatar: state.changeAvatar,
  // }), shallow);

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
  };

  return (
    <div className={styles.profileSettings}>
      <div className={styles.profileChangeItem}>
        <img src={avatarValue} alt="avatar" className={styles.personAvatar} />
        <input
          className={styles.photoChangeInput}
          ref={inputRef}
          type="url"
          onChange={(e) => setAvatarValue(e.target.value)}
          placeholder={'Изменить фото'}
        />
      </div>
      <div className={styles.profileChangeItem}>
        <div className={styles.labelWrapper}>
          <label className={styles.inputLabel}>Имя:</label>
        </div>
        <input
          className={styles.profileChangeInput}
          type="text"
          onChange={(e) => setNameValue(e.target.value)}
          placeholder={getName}
        />
      </div>
      <div className={styles.profileChangeItem}>
        <div className={styles.labelWrapper}>
          <label className={styles.inputLabel}>Тел.:</label>
        </div>
        <input
          className={styles.profileChangeInput}
          type="tel"
          onChange={(e) => setNumberValue(e.target.value)}
          placeholder={getNumber}
        />
      </div>
      <div className={styles.profileChangeItem}>
        <div className={styles.labelWrapper}>
          <label className={styles.inputLabel}>О себе:</label>
        </div>
        <textarea
          className={styles.profileChangeInput}
          onChange={(e) => setAboutValue(e.target.value)}
          placeholder={getAbout}
        />
      </div>
      <button type="button" onClick={saveChanges}>
        Сохранить
      </button>
      {children}
    </div>
    // <button
    //   className={`${styles.button} ${styles[`button_viewType_${viewType}`]}`} onClick={onClick}
    //   {...props}
    // >
    //   <div className={`${styles.content} ${styles[`content_viewType_${viewType}`]}`}>
    //   </div>
    // </button>
  );
};

export default ProfileSettings;
