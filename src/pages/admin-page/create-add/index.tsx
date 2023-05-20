import { useNavigate } from 'react-router-dom';
import styles from '../admin-page.module.scss';
import { useEffect, useState } from 'react';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { useStore } from '../../../services/store';
import { useFindUser, useSetTitleAdminPage } from '..';
import ApplicationCards from '../../../components/application-cards';
import CircleButton from '../../../components/common/circle-button';
import Text from '../../../components/common/text';
import NavButton from '../../../components/common/nav-button';
import CreateApplicationPopup from '../../../components/modals/create-application-popup';
import { ReactComponent as CreateEditIcon } from '../../../assets/icons/create-edit.svg';
import UserCard from '../../../components/user-card';
import { COLORS } from '../../../styles/colors';
import { AdminPageTitle } from '../../../types';
import AdminFilterPopup from '../../../components/modals/admin-filter-popup';
import TopPanel from '../../../components/top-panel';

const CreateEdit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, addUser } = useFindUser();
  const { setTitle } = useSetTitleAdminPage();
  const adminUsersData = useStore((store) => store.adminUsersData);
  const applicationCards = useStore((store) => store.applicationCards);

  useEffect(() => setTitle(AdminPageTitle.edit), []);

  useEffect(() => {
    addUser(adminUsersData[0]);
  }, []);

  return (
    <div className={styles.creatEditAppContainer}>
      <TopPanel title='Создание / Редактирование заявки' titleIcon={<CreateEditIcon fill={COLORS.get('color-primary')} />}>
        <AdminFilterPopup onClick={() => {}} />
      </TopPanel>
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

export default CreateEdit;
