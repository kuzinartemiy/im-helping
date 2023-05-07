import { useNavigate } from 'react-router-dom';
import NavButton from '../../components/nav-button';
import styles from './admin-page.module.scss';
import { useFindUser } from './adminPage';
import UserCard from '../../components/user-card/user-card';
import { useEffect, useState } from 'react';
import { adminUsersData } from './adminPage.constans';
import CircleButton from '../../components/circle-button';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { COLORS } from '../../styles/colors';
import Text from '../../components/text';
import CreateApplicationPopup from '../../components/create-application-popup';

const CreatEditApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, addUser } = useFindUser();

  useEffect(() => {
    addUser(adminUsersData[0]);
  }, []);

  return (
    <div className={styles.CreatEditAppContainer}>
      <div className={styles.search}>
        <NavButton onClick={() => navigate('/admin/search-applications')}>
          Поиск
        </NavButton>
      </div>
      <div className={styles.searchCards}>
        {user !== null && <UserCard name={user.userName} id={user.userId} phone={user.userTel} />}
      </div>
      <div className={styles.createApp}>
        <CircleButton size='large' onClick={() => setIsOpen(true)}><Plus /></CircleButton>
        <Text
          children={'Создать заявку'}
          size={'24'}
          color={COLORS.get('color-secondary')}
        />
        {isOpen && user !== null && <CreateApplicationPopup owner={{
          name: user.userName,
          avatar: user.userImg,
          phone: user.userTel,
        }} onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

export default CreatEditApp;
