import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import RadiusSearch from '../radius-search';
import Header from '../header';

function App() {
  return (
    <>
      <div className={styles.app} />
      <Header />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <RadiusSearch />
      <Footer />
    </>
  );
}

export default App;
