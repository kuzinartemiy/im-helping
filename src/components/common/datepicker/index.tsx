import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import styles from './datepicker.module.scss';
import { DatePickerTypes } from '../../../types';
import { useEffect, useRef, useState } from 'react';
registerLocale('ru', ru);
setDefaultLocale('ru');

interface IDatePicker extends React.InputHTMLAttributes<HTMLInputElement> {
  type: DatePickerTypes
  children?: React.ReactNode
  onChange?: (e: React.FormEvent) => void
}

const CustomDatePicker: React.FC<IDatePicker> = ({
  children,
  type,
  onChange,
  ...props
}) => {
  const inputRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  // const typeDatePicker = type;

  useEffect(() => {
    const event = new Event('input', { bubbles: true });
    (inputRef.current as unknown as HTMLElement).dispatchEvent(event);
  }, [startDate]);
  return (
    <>
      <input
        ref={inputRef}
        className={styles.input}
        type={'text'}
        value={startDate.toString()}
        readOnly
        onInput={onChange}
        {...props}
      />
      <h5 className={styles.name}>{children}</h5>
      {type === DatePickerTypes.Date && (
        <DatePicker
          className={styles.time}
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption='Время'
          dateFormat='p'
          timeFormat='hh:mm'
          locale='ru'
        />
      )}
      {type === DatePickerTypes.Date && (
        <DatePicker
          selected={startDate}
          onChange={(date: any) => {
            setStartDate(date);
          }}
          inline
          dateFormat='MM'
          dateFormatCalendar='LLLL'
        />
      )}
    </>
  );
};

export default CustomDatePicker;
