import styles from '../blog-page.module.scss';
import { ReactComponent as IconPopular } from '../../../assets/icons/popular.svg';
import TopPanel from '../../../components/top-panel';

const Popular = () => {
  return (
    <>
      <TopPanel title='Популярное' titleIcon={<IconPopular className={styles.colorBlueIcon} />} filter={false} />
      <div className={styles.contactsBody}>
        <div className={styles.articleAuthor}>
          <div className={styles.authorImage} />
          <div className={styles.authorInfoWrapper}>
            <p className={styles.authorName}>Петров Петр Петрович</p>
            <p className={styles.authorId}>ID 11111114</p>
          </div>
        </div>
        <div className={styles.mainArticle}>
          <h1 className={styles.articleTitle}>Благотворительность в рекламе</h1>
          <p className={styles.articlePreview}>
            Реклама благотворительности встречается везде: от интернет-сайтов до уличных билбордов. И наверняка вы хоть раз встречали
            сообщения, которые рассказывали о важности помогать разным категориям людей. Мы благотворительными организациями создаем
            рекламные кампании и продвигаем идею благотворительности разными способами. Выстраиваем качественную коммуникацию с целевой
            аудиторией на основе исследований, которые особенно важно проводить при работе с благотворительной сферой. В этой статье мы
            поделимся нюансами, которые которые стоит учитывать в рекламе данной сферы, а также расскажем об ее развитии.{' '}
            <a href='#read'>Читать</a>
          </p>
          <div className={styles.imageSection}>
            <img src='https://i.ibb.co/wpLHCGW/rectangl.png' alt='благотворительность' className='rectangle-img' />
            <div className={styles.imageWrapper}>
              <img src='https://i.ibb.co/2ycCydV/small.png' alt='пакеты с подарками' />
              <img src='https://i.ibb.co/MVnPj3g/small2.png' alt='донаты' />
              <img src='https://i.ibb.co/MVnPj3g/small2.png' alt='донаты' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
