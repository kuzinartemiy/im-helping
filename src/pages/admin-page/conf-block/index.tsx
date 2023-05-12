import { useEffect } from 'react';
import styles from '../admin-page.module.scss';
import { useSetTitleAdminPage } from '..';
import { useStore } from '../../../services/store';
import { AdminPageTitle } from '../../../types';
import AdminDefault from '../../../components/admin-default';

const ConfBlockApp = () => {
  const { setTitle } = useSetTitleAdminPage();
  const adminUsersData = useStore((store) => store.adminUsersData);

  useEffect(() => setTitle(AdminPageTitle.created), []);
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
