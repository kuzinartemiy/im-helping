import styles from './socials.module.scss';
import { ReactComponent as IconContactsGlobe } from '../../../assets/icons/contacts-globe.svg';
import TopPanel from '../../../components/top-panel';
import { contactSocialLinks } from '../contacts.constants';

const Socials = () => (
  <>
    <TopPanel title='Контакты' titleIcon={<IconContactsGlobe className={styles.colorBlueIcon} />} filter={false} />
    <ul className={styles.socialsList}>
      {contactSocialLinks.map(social => (
        <li key={social.id} className={styles.socialsItem}>
          <p className={styles.socialsTitle}>{social.title}</p>
          <a href={social.link} className={styles.socialsLink}>
            {social.link}
          </a>
        </li>
      ))}
    </ul>
  </>
);

export default Socials;
