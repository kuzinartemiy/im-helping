import { useEffect, useState } from 'react';
import Input from '../../components/input/input';
import styles from './search-app.module.scss';
import { adminUsersData } from './adminPage.constans';
import UserCard from '../../components/user-card/user-card';
import { AdminPageTitle, useFindUser, useSetTitleAdminPage } from './adminPage';
import { useNavigate } from 'react-router-dom';

const SearchApp = () => {
  const { setTitle } = useSetTitleAdminPage();
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState('');
  const [arr, setArr] = useState<typeof adminUsersData>([]);
  const { addUser } = useFindUser();
  const navigate = useNavigate();

  useEffect(() => setTitle(AdminPageTitle.edit), []);

  const search = () => {
    const searchArr = adminUsersData.filter((el) => {
      const reg = new RegExp(state, 'i');
      return reg.test(el.userName);
    });
    setArr(searchArr);
    if (state === '') setVisible(false);
    else setVisible(true);
  };

  let timer: NodeJS.Timeout | null = null;
  useEffect(() => {
    if (timer !== null) clearTimeout(timer);

    timer = setTimeout(search, 600);
  }, [state]);

  const onChange = (e: React.FormEvent) => {
    if (visible) setVisible(false);
    const input = e.target as HTMLInputElement;
    setState(input.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Введите имя</p>
        <Input
          type={'text'}
          name={'searchAdmin'}
          value={state}
          placeholder='Петр'
          onChange={onChange}
        />
      </div>
      {visible &&
        arr.map((user) => (
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
