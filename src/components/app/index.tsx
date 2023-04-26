import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import DatePickerExs from '../datepicker';
import DatePickerTime from '../datepicker_time';

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
      <DatePickerTime/>
      <DatePickerExs/>
      <div className={styles.app} />

      <Footer />
    </>
  );
}

export default App;
