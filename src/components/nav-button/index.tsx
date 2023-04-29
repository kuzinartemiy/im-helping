import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import Text from '../text';
import styles from './nav-button.module.scss';

interface INavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode
}

const NavButton = ({ children, ...props }: INavButtonProps) => {
  return (
    <button className={styles.navButton} {...props}>
      <ArrowIcon fill='#FBFDFF' />
      <Text lineHeight='19px' size='16' color='#FBFDFF'>{children}</Text>
    </button>
  );
};

export default NavButton;
