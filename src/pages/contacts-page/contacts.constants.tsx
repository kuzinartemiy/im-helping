import styles from './contacts-page.module.scss';
import { ReactComponent as IconContactsGlobe } from '../../assets/icons/contacts-globe.svg';
import { ReactComponent as IconMessage } from '../../assets/icons/message.svg';
import type { INavCard } from '../../components/common/nav-card';

export const contactsPageNavCards: INavCard[] = [
  {
    text: 'Контакты',
    icon: <IconContactsGlobe className={styles.colorWhiteIcon} />,
    path: 'socials',
  },
  {
    text: 'Напишите нам',
    icon: <IconMessage className={styles.colorWhiteIcon} width={43} height={35} />,
    path: 'feedback',
  },
];

export const contactSocialLinks = [
  {
    id: '1',
    link: 'mailto:help@yandex.ru',
    title: 'Email',
  },
  {
    id: '2',
    link: 'https://vk.com/me2help',
    title: 'VK',
  },
];
