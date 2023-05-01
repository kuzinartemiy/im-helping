import NavCard from '../nav-card/index';
import { btnStart } from './start-page.constants';
import styles from '../nav-cards/nav-cards.module.scss';
import stylesMain from './start-page.module.scss';

function StartPage() {
  return (
    <>
      <section className={stylesMain.startPageContainer}>
        <ul className={styles.linkCardContainer}>
          {btnStart.map((item, index) => {
            return <li key={index} className={styles.linkCard}>
              <NavCard text={item.text} icon={item.icon} path={item.path} />
            </li>;
          })}
        </ul>
      </section>
    </>
  );
}

export default StartPage;
