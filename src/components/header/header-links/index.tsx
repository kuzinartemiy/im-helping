import type React from 'react';
import styles from './header-links.module.scss';
import Text from '../../text';
import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
import { ReactComponent as BlogIcon } from '../../../assets/icons/blog.svg';
import { ReactComponent as PrivacyIcon } from '../../../assets/icons/privacy.svg';
import { ReactComponent as ContactsIcon } from '../../../assets/icons/contacts.svg';
import { NavLink } from 'react-router-dom';

interface IHeaderLinks {
  extraClass?: string
}

const HeaderLinks: React.FC<IHeaderLinks> = ({ extraClass = '', ...props }) => {
  return (
    <ul className={styles.navBox}>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <PersonIcon />
          <Text tag='p' weight='400' size='16' color='black'>Личный кабинет</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/blog/popular" {...props}>
          <BlogIcon />
          <Text tag='p' weight='400' size='16' color='black'>Блог</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/path" {...props}>
          <PrivacyIcon />
          <Text tag='p' weight='400' size='16' color='black'>Политика конфиденциальности</Text>
        </NavLink>
      </li>
      <li className={styles.navLink}>
        <NavLink className={`${styles.navItem} ${extraClass}`} to="/contacts" {...props}>
          <ContactsIcon />
          <Text tag='p' weight='400' size='16' color='black'>Контакты</Text>
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderLinks;
