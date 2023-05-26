import styles from './person-volunteer.module.scss';
import { ReactComponent as FaceIcon } from '../../assets/icons/balls.svg';
import { ReactComponent as KeyIcon } from '../../assets/icons/key.svg';
import { ReactComponent as HandsIcon } from '../../assets/icons/finished-applications.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/customization.svg';
import { ReactComponent as ProgressBarIcon } from '../../assets/icons/progress-bar.svg';

interface IPersonVolunteer {
  avatar: string;
  name: string;
  id: string;
  phone: string;
  about: string;
  counters?: {
    faces?: number;
    keys?: number;
    hands?: number;
  };
  progress?: number;
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

const PersonVolunteer = ({ avatar, name, id, phone, about, progress, counters }: IPersonVolunteer) => (
  <div className={styles.personWrapper}>
    <img src={avatar} alt='avatar' className={styles.personAvatar} />
    <div className={styles.personInfo}>
      <p className={styles.personName}>{name}</p>
      <p className={styles.personId}>ID {id}</p>
      <div className={styles.personProps}>
        <p className={styles.personProp}>
          <span className={styles.propKey}>Тел.: </span>
          <span className={styles.propValue}>{phone}</span>
        </p>
        <p className={styles.personProp}>
          <span className={styles.propKey}>О себе: </span>
          <span className={styles.propValue}>{about}</span>
        </p>
      </div>

      {counters != null ? (
        <ul className={styles.countersWrapper}>
          {counters.faces != null && (
            <li className={styles.counter}>
              <FaceIcon /> {counters.faces}
            </li>
          )}
          {counters.keys != null && (
            <li className={styles.counter}>
              <KeyIcon /> {counters.keys}
            </li>
          )}
          {counters.hands != null && (
            <li className={styles.counter}>
              <HandsIcon /> {counters.hands}
            </li>
          )}
        </ul>
      ) : null}

      <div className={styles.editButton}>
        <div className={styles.editIconWrapper}>
          <EditIcon className={styles.editIcon} />
        </div>
      </div>

      {progress != null && (
        <div className={styles.progressBar}>
          <p className={styles.progressTitle}> {progress} из 5</p>
          <ProgressBarIcon />
        </div>
      )}
    </div>
  </div>
);

export default PersonVolunteer;
