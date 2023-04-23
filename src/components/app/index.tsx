import styles from './app.module.scss';
import Checkboxes from '../checkboxes/checkboxes';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';

function App() {
  return (
    <>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
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
      <Checkboxes title='отображать' />
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <Footer />
    </>
  );
}

export default App;
