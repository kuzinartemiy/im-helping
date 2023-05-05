import AdminDefault from '../../components/admin-default';
import styles from './admin-page.module.scss';
import { adminUsersData } from './adminPage.constans';

const ConfBlockApp = () => {
  return (
    <div className={styles.userCards}>
      {adminUsersData.map((userData, index) => (
        <div
          className={styles.userCard}
          key={index}
        >
          <AdminDefault
            userImg={userData.userImg}
            userName={userData.userName}
            userId={userData.userId}
            userTel={userData.userTel}
            userPoints={userData.userPoints}
            userHelps={userData.userHelps}
            userKey={userData.userKey}
            lineColor={userData.lineColor}
            confirmed={userData.confirmed}
          />
        </div>
      ))}
    </div>
  );
};

export default ConfBlockApp;
