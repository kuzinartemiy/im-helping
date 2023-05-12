import style from './super-admin-page.module.scss';
import NavCards from '../../components/nav-cards';
import PersonVolunteer from '../../components/person-volunteer';
import { adminPageData, superAdminTestPersonProps } from './super-admin-page.constants';
import { Outlet } from 'react-router';

function SuperAdminPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <PersonVolunteer {...superAdminTestPersonProps} />
        <NavCards cards={adminPageData} />
      </div>
      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default SuperAdminPage;
