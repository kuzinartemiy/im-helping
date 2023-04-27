import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import DatePickerProd from '../datepicker_prod';

function App() {
  return (
    <>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img /* src={logo} */ className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <div className={styles.app} />

      <Footer />
    </>
  );
}

export default App;
