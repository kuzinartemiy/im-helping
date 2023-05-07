import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import styles from './datepicker_prod.module.scss';
import React from 'react';
registerLocale('ru', ru);
setDefaultLocale('ru');

interface IDatePicker extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'data' | 'time'
  children?: React.ReactNode
  onChange?: (e: React.FormEvent) => void
}

const DatePickerProd: React.FC<IDatePicker> = ({
  children,
  type,
  onChange,
  ...props
}) => {
  const inputRef = React.useRef(null);
  const [startDate, setStartDate] = React.useState(new Date());
  const typeDatePicker = type;

  React.useEffect(() => {
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
          timeCaption='Время'
          dateFormat='p'
          timeFormat='hh:mm'
          locale='ru'
        />
        )
        : (
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

export default DatePickerProd;
