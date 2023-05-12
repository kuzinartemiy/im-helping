import { useEffect } from 'react';
import styles from '../admin-page.module.scss';
import { useSetTitleAdminPage } from '..';
import { useStore } from '../../../services/store';
import { AdminPageTitle } from '../../../types';
import AdminDefault from '../../../components/admin-default';
import AdminFilterPopup from '../../../components/modals/admin-filter-popup';
import { ReactComponent as BlockingIcon } from '../../../assets/icons/blocking.svg';
import TopPanel from '../../../components/top-panel';
import { COLORS } from '../../../styles/colors';

const ConfBlock = () => {
  const { setTitle } = useSetTitleAdminPage();
  const adminUsersData = useStore((store) => store.adminUsersData);

  useEffect(() => setTitle(AdminPageTitle.created), []);
  return (
    <>
      <TopPanel title='Подтверждение / Блокировка' titleIcon={<BlockingIcon fill={COLORS.get('color-primary')} />}>
        <AdminFilterPopup onClick={() => {}} />
      </TopPanel>
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
    </>
  );
};

export default ConfBlock;
