import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import AdminDefault from '../admin-default';
// import Text from '../text';

function App() {
  return (
    <>
      <div className={styles.app} />
      <Box>
        <AdminDefault />
      </Box>
      <Footer />
    </>
  );
}

export default App;
