import style from './top-panel.module.scss';
import Text from '../text';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { COLORS } from '../../styles/colors';
import { useState } from 'react';
import FilterPopup from '../filter-popup';

type TTopPanel = {
  title: string
  titleIcon?: React.ReactNode
  titleImageStyle?: string
  filter?: boolean
  onFilterClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  filterText?: string
  filterImage?: React.ReactNode
  filterImageStyle?: string
  children?: React.ReactNode
} & React.HTMLProps<HTMLDivElement>;

const TopPanel = ({
  title,
  titleIcon,
  titleImageStyle = style.title_image,
  filterImageStyle = style.filter_image,
  filter = true,
  children,
  ...props
}: TTopPanel) => {
  const [openFilterPopup, setOpenFilterPopup] = useState(false);

  const handleClose = () => {
    setOpenFilterPopup(false);
  };
  const onFilterClick = () => {
    if (!openFilterPopup) {
      setOpenFilterPopup(true);
    } else {
      setOpenFilterPopup(false);
    }
  };

  return (
    <div
      className={style.wrapper}
      {...props}
    >
      <div className={style.title}>
        <div className={titleImageStyle}>{titleIcon}</div>
        <Text
          size='24'
          color={COLORS.get('color-primary')}
        >
          {title}
        </Text>
      </div>
      { filter
        ? <div className={style.filter} onClick={onFilterClick}>
        <Text size='16' color={COLORS.get('color-primary')}>Фильтр</Text>
        <div className={filterImageStyle}><FilterIcon fill={COLORS.get('color-primary')} /></div>
      </div>
        : null }
      {openFilterPopup && <FilterPopup onClose={handleClose}>{children}</FilterPopup>}
    </div>
  );
};

export default TopPanel;
