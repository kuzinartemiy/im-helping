import { ReactComponent as PersonIcon } from '../../../assets/icons/person.svg';
import { ReactComponent as BlogIcon } from '../../../assets/icons/blog.svg';
import { ReactComponent as PrivacyIcon } from '../../../assets/icons/privacy.svg';
import { ReactComponent as ContactsIcon } from '../../../assets/icons/contacts.svg';

export const headerLinks = [
  {
    id: '1',
    link: 'profile',
    title: 'Личный кабинет',
    icon: <PersonIcon />,
  },
  {
    id: '2',
    link: 'blog',
    title: 'Блог',
    icon: <BlogIcon />,
  },
  {
    id: '3',
    link: 'privacy',
    title: 'Политика конфиденциальности',
    icon: <PrivacyIcon />,
  },
  {
    id: '4',
    link: 'contacts',
    title: 'Контакты',
    icon: <ContactsIcon />,
  },
];
