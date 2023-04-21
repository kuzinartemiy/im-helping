import React from 'react';
import logo from './logo.svg';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p className={`text_type_h1 color_gradient ${styles.text}`}>
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
        <div className={`color_gradient ${styles.block}`}></div>
      </header>
    </div>
  );
}

export default App;
