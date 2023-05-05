import { useNavigate } from 'react-router-dom';
import NavButton from '../../components/nav-button';
import styles from './admin-page.module.scss';
import { useFindUser } from './adminPage';
import UserCard from '../../components/user-card/user-card';

const CreatEditApp = () => {
  const navigate = useNavigate();
  const { user } = useFindUser();
  return (
    <div className={styles.CreatEditAppContainer}>
      <NavButton onClick={() => navigate('/admin/search-applications')}>
        Поиск
      </NavButton>
      {user !== null && <UserCard name={user.userName} id={user.userId} phone={user.userTel} />}
    </div>
  );
};

export default CreatEditApp;
