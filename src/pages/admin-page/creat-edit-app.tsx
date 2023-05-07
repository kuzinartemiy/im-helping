import { useNavigate } from 'react-router-dom';
import styles from './admin-page.module.scss';
import { useEffect, useState } from 'react';
import { adminUsersData, applicationCards } from './adminPage.constans';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { COLORS } from '../../styles/colors';
import { useFindUser, useSetTitleAdminPage } from '.';
import { AdminPageTitle } from '../../types';
import NavButton from '../../components/common/nav-button';
import UserCard from '../../components/user-card';
import CircleButton from '../../components/common/circle-button';
import CreateApplicationPopup from '../../components/modals/create-application-popup';
import Text from '../../components/common/text';
import ApplicationCards from '../../components/application-cards';

const CreatEditApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, addUser } = useFindUser();
  const { setTitle } = useSetTitleAdminPage();

  useEffect(() => setTitle(AdminPageTitle.edit), []);

  useEffect(() => {
    addUser(adminUsersData[0]);
  }, []);

  return (
    <div className={styles.CreatEditAppContainer}>
      <div className={styles.search}>
        <NavButton onClick={() => navigate('/profile/admin/search-applications')}>
          Поиск
        </NavButton>
      </div>
      <div className={styles.searchCards}>
        {user !== null && (
          <UserCard
            name={user.userName}
            id={user.userId}
            phone={user.userTel}
          />
        )}
      </div>
      <div className={styles.createApp}>
        <CircleButton
          size='large'
          onClick={() => setIsOpen(true)}
        >
          <Plus />
        </CircleButton>
        <Text
          children={'Создать заявку'}
          size={'24'}
          color={COLORS.get('color-secondary')}
        />
        {isOpen && user !== null && (
          <CreateApplicationPopup
            owner={{
              name: user.userName,
              avatar: user.userImg,
              phone: user.userTel,
            }}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
      <div className={styles.cards}>
        <ApplicationCards applicationCards={applicationCards} size='large' />
      </div>
    </div>
  );
};

export default CreatEditApp;
