import styles from './blog-page.module.scss';
import { Outlet } from 'react-router-dom';
import { blogData } from './blog-page';
import NavCards from '../../components/nav-cards';

const BlogPage = () => {
  return (
    <main className={styles.blogPage}>
      <section className={styles.navBlock}>
        {/* <ul className={navCardsStyles.linkCardContainer}>
          {blogData.map((item, index) => {
            return (
              <li key={index} className={navCardsStyles.linkCard}>
                <NavCard text={item.text} icon={item.icon} path={item.path} />
              </li>
            );
          })}
        </ul> */}
        <NavCards cards={blogData} />
      </section>
      <section className={styles.blogPage__applications}>
        <Outlet />
        <div className={styles.blogPage__applications_opacity}></div>
      </section>
    </main>
  );
};

export default BlogPage;
