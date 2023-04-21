import React from 'react';
import Button from './button';
import styles from './start-page.module.scss';
import IconFish from './icon-fish';

function StartPage() {
  return (
    <>
      <section className={styles.startPageContainer}>
        <div className={styles.btnContainer}>
          <Button text='Главный администратор' icon={<IconFish />} />
          <Button text='Администратор' icon={<IconFish />} />
          <Button text='Реципиент' icon={<IconFish />} />
          <Button text='Волонтер' icon={<IconFish />} />
        </div>
      </section>
    </>
  );
}

export default StartPage;
