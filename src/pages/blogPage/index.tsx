import styles from './blogPage.module.scss';
import { Outlet } from 'react-router-dom';
import { blogData } from './blogPage.constants';
import NavCard from '../../components/nav-card';
import navCardsStyles from '../../components/nav-cards/nav-cards.module.scss';

const BlogPage = () => {
  return (
      <main className={styles.blogPage}>
        <section>
          <ul className={navCardsStyles.linkCardContainer}>
          {blogData.map((item, index) => {
            return <li key={index} className={navCardsStyles.linkCard}>
              <NavCard text={item.text} icon={item.icon} path={item.path}/>
            </li>;
          })}
        </ul>
        </section>
        <section className={styles.volunteerPage__applications}>
        <Outlet />
        <div className={styles.volunteerPage__applications_opacity}></div>
      </section>
      </main>
  );
};

export default BlogPage;
