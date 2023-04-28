import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../aplication-card/aplication-card';
import { store } from '../aplication-card/application-card.constans';

/* const aplicationCards = store.aplicationCardData
  .map(aplicationCard => <AplicationCard
    key={aplicationCard.id}
    id={aplicationCard.id}
    date={aplicationCard.date}
    time={aplicationCard.time}
    location={aplicationCard.location}
    about={aplicationCard.about}
    completedAppQuantity={aplicationCard.completedAppQuantity}
    userName={aplicationCard.owner.name}
    userAvatar={aplicationCard.owner.avatar}
    userPhone={aplicationCard.owner.phone}
  />); */

function App() {
  return (
    <>
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <section className={styles.app__aplicationCards}>
        { store.aplicationCardData.map(aplicationCard => <AplicationCard key={ aplicationCard.id } cardData={ aplicationCard } />) }
      </section>
      <Footer />
    </>
  );
}

export default App;
