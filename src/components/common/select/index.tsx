import * as React from 'react';
import styles from './select.module.scss';
import { type ChangeEvent } from 'react';

interface ISelect {
  value: string
  elementsList: string[]
  name?: string
  errorText?: string
  isError?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Select: React.FC<ISelect> = ({
  value,
  elementsList,
  errorText,
  isError: checkError = false,
  onChange,
  name,
}) => {
  const [stateValue, setStateValue] = React.useState(value);
  const [isDefault, setIsDefault] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(checkError);
  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const checkClickOnButton = (e: MouseEvent) => {
    const el = e.target;
    if (el !== buttonRef.current) setIsOpen(false);
  };

  const checkPressEsc = (e: KeyboardEvent) => {
    const button = e.key;
    if (button === 'Escape') setIsOpen(false);
  };

  React.useEffect(() => {
    const event = new Event('input', { bubbles: true });
    (inputRef.current as unknown as HTMLElement).dispatchEvent(event);
  }, [stateValue]);

  React.useEffect(() => {
    document.addEventListener('click', checkClickOnButton);
    document.addEventListener('keydown', checkPressEsc);
    return () => {
      document.removeEventListener('click', checkClickOnButton);
      document.removeEventListener('keydown', checkPressEsc);
    };
  }, []);

  const handleClickButton = () => {
    setIsOpen(!isOpen);
    if (isError) setIsError(false);
  };

  const handleClickLi = (e: React.FormEvent) => {
    const element = e.target as HTMLLIElement;
    const elementValue = element.textContent as string;
    setStateValue(elementValue);
    setIsDefault(false);
    setIsOpen(!isOpen);
  };
  const borderColorStyle = (isError && styles.dropdown_error) as string;
  const arrowAnimation = isOpen ? styles.dropdown_close : styles.dropdown_open;
  const colorStyle = (!isDefault && styles.dropdown_active) as string;

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={`${styles.dropdown} ${colorStyle} ${arrowAnimation} ${borderColorStyle}`}
        onClick={handleClickButton}
      >
        {stateValue}
      </button>
      {isError && <p className={styles.error}>{errorText}</p>}
      {isOpen && (
        <ul className={styles.dropdownList}>
          {elementsList.map((el, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={handleClickLi}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
      <input
        ref={inputRef}
        type='text'
        value={stateValue}
        className={styles.input}
        onInput={onChange}
        readOnly
        name={name}
      />
    </div>
  );
};

export default Select;
