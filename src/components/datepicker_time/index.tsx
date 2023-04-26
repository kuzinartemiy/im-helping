import { /* React, */ useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import styles from './datepicker_time.module.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
registerLocale('ru', ru);

// CSS Modules, react-datepicker-cssmodules.css

setDefaultLocale('ru');

const DatePickerTime = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    <h5 className={styles.name}>Время</h5>
      <DatePicker
        className={styles.time}
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Время"
        dateFormat="p"
        timeFormat="hh:mm"
        locale="pt-BR"
      />
    </>
  );
};

export default DatePickerTime;
