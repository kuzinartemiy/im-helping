import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-down.svg';
import Text from '../text';
import styles from './nav-button.module.scss';
import { COLORS } from '../../styles/colors';

interface INavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode
}

const NavButton = ({ children, ...props }: INavButtonProps) => {
  return (
    <button className={styles.navButton} {...props}>
      <ArrowIcon fill={COLORS.get('background')} />
      <Text lineHeight='19px' size='16' color={COLORS.get('background')}>{children}</Text>
    </button>
  );
};

export default NavButton;
