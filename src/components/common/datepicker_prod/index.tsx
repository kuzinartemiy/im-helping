import { /* React, */ useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import styles from './datepicker_prod.module.scss';
registerLocale('ru', ru);
setDefaultLocale('ru');

interface IDatePicker {
  type: 'data' | 'time'
  children?: React.ReactNode
}

const DatePickerProd: React.FC<IDatePicker> = ({
  children,
  type,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const typeDatePicker = type;
  return (
    <>
      <h5 className={styles.name}>{children}</h5>
    {typeDatePicker === 'time'
      ? (
        <DatePicker
          className={styles.time}
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="p"
          timeFormat="hh:mm"
          locale="pt-BR"
        />
      )
      : (
        <DatePicker
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
          }}
          inline
          dateFormat="MM"
          dateFormatCalendar="LLLL"
        />
      )}
    </>
  );
};

export default DatePickerProd;
