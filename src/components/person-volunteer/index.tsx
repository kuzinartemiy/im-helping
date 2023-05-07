import styles from './person-volunteer.module.scss';
import { ReactComponent as FaceIcon } from '../../assets/icons/balls.svg';
import { ReactComponent as KeyIcon } from '../../assets/icons/key.svg';
import { ReactComponent as HandsIcon } from '../../assets/icons/finished-applications.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/customization.svg';
import { ReactComponent as ProgressBarIcon } from '../../assets/icons/progress-bar.svg';
import { useEffect, useState } from 'react';
import Modal from '../common/modal';
import { useStore } from '../../services/store';
import ProfileSettings from './profile-settings';
import { shallow } from 'zustand/shallow';

interface IPersonVolunteer {
  avatar: string
  name: string
  id: string
  phone: string
  about: string
  counters?: {
    faces?: number
    keys?: number
    hands?: number
  }
  progress?: number

}
// ТЕСТОВЫЕ ПРОПСЫ
// const test = {
//   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcId3roctkMS-wX26vViSB2FNUOI-bfaSZw&usqp=CAU',
//   name: 'John Cena',
//   id: '0034321',
//   phone: '88005553535',
//   about: 'I love music, books and scss I love music, books and scss I love music, books and scss',
//   progress: 2,
//   counters: {
//     faces: 2500,
//     keys: 1,
//     hands: 150,
//   },
// };

const PersonVolunteer = ({
  avatar,
  name,
  id,
  phone,
  about,
  progress,
  counters,
}: IPersonVolunteer) => {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClose = () => {
    setOpenPopup(false);
  };

  const { getAvatar, getName, getNumber, getAbout, changeName, changeNumber, changeAbout, changeAvatar } = useStore((state) => ({
    getAvatar: state.userAvatar,
    getName: state.userName,
    getNumber: state.userNumber,
    getAbout: state.userAbout,
    changeName: state.changeName,
    changeNumber: state.changeNumber,
    changeAbout: state.changeAbout,
    changeAvatar: state.changeAvatar,
  }), shallow);

  useEffect(() => {
    changeAvatar(avatar);
    changeName(name);
    changeNumber(phone);
    changeAbout(about);
  }, []);

  return (
  <div className={styles.personWrapper}>
    <img
      src={getAvatar}
      alt="avatar"
      className={styles.personAvatar} />
    <div className={styles.personInfo}>
      <p className={styles.personName}>{getName}</p>
      <p className={styles.personId}>ID {id}</p>
      <div className={styles.personProps}>
        <p className={styles.personProp}>
          <span className={styles.propKey}>Тел.: </span><span className={styles.propValue}>{getNumber}</span>
        </p>
        <p className={styles.personProp}>
          <span className={styles.propKey}>О себе: </span><span className={styles.propValue}>{getAbout}</span>
        </p>
      </div>

          {(counters != null)
            ? <ul className={styles.countersWrapper}>
      {(counters.faces != null) && <li className={styles.counter}>
        <FaceIcon/> {counters.faces}
      </li>}
      {(counters.keys != null) && <li className={styles.counter}>
        <KeyIcon/> {counters.keys}
      </li>}
      { (counters.hands != null) && <li className={styles.counter}>
        <HandsIcon/> {counters.hands}
      </li>}

    </ul>
            : null}

      <button className = {styles.editButton} onClick={() => { setOpenPopup(true); }}>
        <div className={styles.editIconWrapper}>
          <EditIcon className={styles.editIcon}/>
        </div>
      </button>
      {openPopup && <Modal viewType='secondary'
        onClose={() => { handleClose(); }}
      > <ProfileSettings onClose={() => { handleClose(); }}/>
      </Modal>}
    { (progress != null) &&
      <div className={styles.progressBar}>
        <p className={styles.progressTitle}> {progress} из 5</p>
        <ProgressBarIcon/>
      </div>
      }
    </div>
  </div>
  );
};

export default PersonVolunteer;
