import type React from 'react';
import styles from './header-links.module.scss';
import Text from '../../text';
import { ReactComponent as Person } from '../../../assets/icons/person.svg';
import { ReactComponent as Blog } from '../../../assets/icons/blog.svg';
import { ReactComponent as Privacy } from '../../../assets/icons/privacy.svg';
import { ReactComponent as Contacts } from '../../../assets/icons/contacts.svg';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { NavLink } from 'react-router-dom';

interface IHeaderLinks {
  extraClass?: string
}

const HeaderLinks: React.FC<IHeaderLinks> = ({ extraClass = '', ...props }) => {
  return (
    <ul className={styles.navBox}>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <Person />
          <Text tag='p' weight='400' size='16' color='black'>Личный кабинет</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <Blog />
          <Text tag='p' weight='400' size='16' color='black'>Блог</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <Privacy />
          <Text tag='p' weight='400' size='16' color='black'>Политика конфиденциальности</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <Contacts />
          <Text tag='p' weight='400' size='16' color='black'>Контакты</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <Message />
          <Text tag='p' weight='400' size='16' color='black'>Чат</Text>
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderLinks;
