import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import RadiusSearch from '../radius-search';
import MapProd from '../map';

function App() {
  return (
    <>
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <RadiusSearch />
      <MapProd/>
      <Footer />
    </>
  );
}

export default App;
