import { useState } from 'react';
import style from './superAdminPage.module.scss';
import Input from '../../components/input/input';
import NavCards from '../../components/nav-cards';
import PersonVolunteer from '../../components/person-volunteer';
import TopPanel from '../../components/top-panel';
import { ApprovedOrBlockSvg, superAdminTestPersonProps } from './superAdminPage.constants';
import AdminPrivilegesCard from '../../components/admin-privileges-card';

function SuperAdminPage() {
  const [inputName, setUnputName] = useState<string>('');

  const handleInputSearch = (event: any) => {
    const newValue = event.target.value;
    setUnputName(newValue);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <PersonVolunteer {...superAdminTestPersonProps} />
        <NavCards />
      </div>
      <div className={style.content}>
        <TopPanel title="Подтверждение / Блокировка" titleIcon={<ApprovedOrBlockSvg />} children={undefined} />
        <div className={style.inputContainer}>
          <Input label={ 'Введите имя' } type={ 'name' } name={ 'name' } value={ inputName } placeholder={ 'имя' } onChange={handleInputSearch}/>
        </div>
        <div className={style.cards}>
          <AdminPrivilegesCard
            name={superAdminTestPersonProps.name}
            phone={superAdminTestPersonProps.phone}
            id={ superAdminTestPersonProps.id }/>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminPage;
