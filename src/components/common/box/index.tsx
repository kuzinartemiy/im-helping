import styles from './box.module.scss';

interface IBoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: IBoxProps) => <div className={styles.box}>{children}</div>;

export default Box;
