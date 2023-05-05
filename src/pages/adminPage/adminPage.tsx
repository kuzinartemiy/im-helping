import styles from './admin-page.module.scss';
import { adminUsersData, adminData } from '../../utils/admin-default.constants';
import AdminDefault from '../../components/admin-default';
import TopPanel from '../../components/top-panel';
import PersonVolunteer from '../../components/person-volunteer';
import NavCards from '../../components/nav-cards';
import AdminFilterPopup from '../../components/adminFilterPopup';
import { useState } from 'react';

const initState = {
  isFilterOpen: false,
};

const AdminPage = () => {
  const [state, setState] = useState(initState);
  return (
    <div className={styles.adminPage}>
      <aside className={styles.adminSidebar}>
        <PersonVolunteer
          avatar={adminData.avatar}
          name={adminData.name}
          id={adminData.id}
          phone={adminData.phone}
          about={adminData.about}
        />
        <NavCards />
      </aside>
      <main className={styles.adminContent}>
        <TopPanel
          title='Title'
          onFilterClick={() => {
            setState({ ...state, isFilterOpen: !state.isFilterOpen });
          }}
          popup={
            <AdminFilterPopup
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <div className={styles.userCards}>
          {adminUsersData.map((userData, index) => (
            <div className={styles.userCard}>
              <AdminDefault
                key={index}
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
      </main>
    </div>
  );
};

export default AdminPage;
