import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import styles from './datepicker.module.scss';
import { DatePickerTypes } from '../../../types';
registerLocale('ru', ru);
setDefaultLocale('ru');

interface IDatePickerProps {
  type: DatePickerTypes
  children?: React.ReactNode
}

const CustomDatePicker: React.FC<IDatePickerProps> = ({
  children,
  type,
}) => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h5 className={styles.name}>{children}</h5>
      {type === 'time' && (
        <DatePicker
          className={styles.time}
          selected={new Date()}
          onChange={(date) => console.log(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="p"
          timeFormat="hh:mm"
          locale="pt-BR"
        />
      )}
      {type === DatePickerTypes.Date && (
        <DatePicker
          selected={new Date()}
          onChange={(date) => console.log(date)}
          inline
          dateFormat="MM"
          dateFormatCalendar="LLLL"
        />
      )}
    </>
  );
};

export default CustomDatePicker;
