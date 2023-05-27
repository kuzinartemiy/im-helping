import { useCallback, useEffect, useState } from 'react';
import styles from './search.module.scss';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../services/store';
import { useSetTitleAdminPage, useFindUser } from '..';
import Input from '../../../components/common/input';
import UserCard from '../../../components/user-card';
import { AdminPageTitle } from '../../../types';

const SearchApp = () => {
  const { setTitle } = useSetTitleAdminPage();
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState('');
  const [arr, setArr] = useState<typeof adminUsersData>([]);
  const { addUser } = useFindUser();
  const navigate = useNavigate();

  const adminUsersData = useStore(store => store.adminUsersData);

  useEffect(() => setTitle(AdminPageTitle.edit), [setTitle]);

  const search = useCallback(() => {
    const searchArr = adminUsersData.filter(el => {
      const reg = new RegExp(state, 'i');
      return reg.test(el.userName);
    });
    setArr(searchArr);
    if (state === '') setVisible(false);
    else setVisible(true);
  }, [adminUsersData, state]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (timer !== null) clearTimeout(timer);

    timer = setTimeout(search, 600);
  }, [search, state]);

  const onChange = (e: React.FormEvent) => {
    if (visible) setVisible(false);
    const input = e.target as HTMLInputElement;
    setState(input.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Введите имя</p>
        <Input type={'text'} name={'searchAdmin'} value={state} placeholder='Петр' onChange={onChange} />
      </div>
      {visible &&
        arr.map(user => (
          <UserCard
            key={user.userId}
            name={user.userName}
            id={user.userId}
            phone={user.userTel}
            onClick={() => {
              addUser(user);
              navigate('/admin/creation-editing-applications');
            }}
          />
        ))}
    </div>
  );
};

export default SearchApp;
