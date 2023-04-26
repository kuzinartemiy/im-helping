import { /* React, */ useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import styles from './datepicker.module.scss';

registerLocale('es', es);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
setDefaultLocale('es');

const DatePickerExs = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h5 className={styles.name}>Дата</h5>
      <div className={styles.data}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        /* showDisabledMonthNavigation */
        dateFormat="MM"
        dateFormatCalendar="LLLL"
      />
      </div>
    </>
  );
};

export default DatePickerExs;
