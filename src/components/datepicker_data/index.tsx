import { /* React, */ useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import styles from './datepicker_data.module.scss';
registerLocale('es', es);
setDefaultLocale('es');

const DatePickerExs = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h5 className={styles.name}>Дата</h5>
      <div className={styles.data}>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => { setStartDate(date); } }
        inline
        dateFormat="MM"
        dateFormatCalendar="LLLL"
      />
      </div>
    </>
  );
};

export default DatePickerExs;
