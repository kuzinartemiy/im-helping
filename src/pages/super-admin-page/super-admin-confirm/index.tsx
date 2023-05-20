import { useState, type ChangeEvent } from 'react';
import AdminPrivilegesCard from '../../../components/admin-privileges-card';
import { ReactComponent as BlockingIcon } from '../../../assets/icons/blocking.svg';
import Input from '../../../components/common/input';
import TopPanel from '../../../components/top-panel';
import { superAdminTestPersonProps } from '../super-admin-page.constants';
import styles from '../super-admin-page.module.scss';
import { COLORS } from '../../../styles/colors';
import AdminFilterPopup from '../../../components/modals/admin-filter-popup';

const SuperAdminConfirm = () => {
  const [inputName, setUnputName] = useState<string>('');

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setUnputName(newValue);
  };
  return (
    <>
      <TopPanel title="Подтверждение / Блокировка" titleIcon={<BlockingIcon fill={COLORS.get('color-primary')} />}>
        <AdminFilterPopup onClick={() => {}} />
      </TopPanel>
      <div className={styles.inputContainer}>
        <Input label='Введите имя' type='name' name='name' value={inputName} placeholder='имя' onChange={handleInputSearch} />
      </div>
      <div className={styles.cards}>
        <AdminPrivilegesCard
          name={superAdminTestPersonProps.name}
          phone={superAdminTestPersonProps.phone}
          id={ superAdminTestPersonProps.id }/>
      </div>
    </>
  );
};

export default SuperAdminConfirm;
