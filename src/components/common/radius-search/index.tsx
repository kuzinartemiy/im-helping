import { useState } from 'react';
import type { ChangeEventHandler } from 'react';
import RadioButton from '../radio-button';
import styles from './radius-search.module.scss';

const RadiusSearch = () => {
  const [value, setValue] = useState<string>('1');

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.radiusSearch}>
      <RadioButton name='radius' value={1} text={'1 км'} onChange={onChange} actualValue={value} />
      <RadioButton name='radius' value={3} text={'3 км'} onChange={onChange} actualValue={value} />
      <RadioButton name='radius' value={5} text={'5 км'} onChange={onChange} actualValue={value} />
    </div>
  );
};

export default RadiusSearch;
