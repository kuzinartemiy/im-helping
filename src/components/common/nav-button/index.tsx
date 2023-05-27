import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
/* import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-down.svg'; */
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import Text from '../text';
import styles from './nav-button.module.scss';
import { COLORS } from '../../../styles/colors';

interface INavButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const NavButton = ({ children, isDisabled, ...props }: INavButtonProps) => {
  return (
    <button disabled={isDisabled} className={styles.navButton} {...props}>
      {/*  <ArrowIcon fill={COLORS.get('background')} /> */}
      <Search />
      <Text lineHeight='19px' size='16' color={COLORS.get('background')}>
        {children}
      </Text>
    </button>
  );
};

export default NavButton;
