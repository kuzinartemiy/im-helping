import style from './top-panel.module.scss';
import Text from '../text';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';

type TTopPanel = {
  title: string
  titleIcon?: React.ReactNode
  titleImageStyle?: string
  onFilterClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  filterText?: string
  filterImage?: React.ReactNode
  filterImageStyle?: string
} & React.HTMLProps<HTMLDivElement>;

const TopPanel = ({
  title,
  titleIcon,
  titleImageStyle = style.title_image,
  onFilterClick,
  filterImageStyle = style.filter_image,
  ...props
}: TTopPanel) => {
  return (
    <div className={style.wrapper} {...props}>
      <div className={style.title}>
        <div className={titleImageStyle}>{titleIcon}</div>
        <Text size='24' color='#2E3192'>{title}</Text>
      </div>
      <div className={style.filter} onClick={onFilterClick}>
        <Text size='16' color='#2E3192'>Фильтр</Text>
        <div className={filterImageStyle}><FilterIcon fill='#2E3192' /></div>
      </div>
    </div>
  );
};

export default TopPanel;
