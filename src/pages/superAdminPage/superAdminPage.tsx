import NavCards from '../../components/nav-cards';
import PersonVolunteer from '../../components/person-volunteer';
import TopPanel from '../../components/top-panel';
import { ApprovedOrBlockSvg, superAdminTestPersonProps } from './superAdminPage.constants';
import style from './superAdminPage.module.scss';

function SuperAdminPage() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <PersonVolunteer {...superAdminTestPersonProps} />
        <NavCards />
      </div>
      <div className={style.content}>
        <TopPanel title="Подтверждение / Блокировка" titleIcon={<ApprovedOrBlockSvg />} />
      </div>
    </div>
  );
}

export default SuperAdminPage;
