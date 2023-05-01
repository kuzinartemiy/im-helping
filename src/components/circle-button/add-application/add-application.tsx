import styles from './add-application.module.scss';
import CircleButton from '../index';

const AddApplication = () => {
  return (
    <CircleButton size={ 'large' } children={ <div className={styles.addApplication}></div> }/>
  );
};

export default AddApplication;
