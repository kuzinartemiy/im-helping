import style from './top-panel.module.scss';
import Text from '../../components/common/text';

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { COLORS } from '../../styles/colors';
import { useState } from 'react';
import ActiveFilterPopup from '../modals/active-filter-popup';
import FilterPopup from '../modals/filter-popup';
import MapFilterPopup from '../modals/map-filter-popup';
import CompletedFilterPopup from '../modals/completed-filter-popup';
import RecipientFilterPopup from '../modals/recipient-filter-popup';

type TTopPanel = {
  title: string;
  titleIcon?: React.ReactNode;
  titleImageStyle?: string;
  filter?: boolean;
  onFilterClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  filterText?: string;
  filterImage?: React.ReactNode;
  filterImageStyle?: string;
  filterType?: string;
} & React.HTMLProps<HTMLDivElement>;

const TopPanel = ({
  title,
  titleIcon,
  titleImageStyle = style.title_image,
  filterImageStyle = style.filter_image,
  filter = true,
  filterType = 'ActiveFilterPopup',
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
    <div className={style.wrapper} {...props}>
      <div className={style.title}>
        <div className={titleImageStyle}>{titleIcon}</div>
        <Text size='24' color={COLORS.get('color-primary')}>
          {title}
        </Text>
      </div>
      {filter && (
        <div className={style.filter} onClick={onFilterClick}>
          <Text size='16' color={COLORS.get('color-primary')}>
            Фильтр
          </Text>
          <div className={filterImageStyle}>
            <FilterIcon fill={COLORS.get('color-primary')} />
          </div>
        </div>
      )}
      {openFilterPopup && (
        <FilterPopup onClose={handleClose}>
          {filterType === 'RecipientFilterPopup' && <RecipientFilterPopup />}
          {filterType === 'ActiveFilterPopup' && <ActiveFilterPopup />}
          {filterType === 'MapFilterPopup' && <MapFilterPopup />}
          {filterType === 'CompletedFilterPopup' && <CompletedFilterPopup />}
        </FilterPopup>
      )}
    </div>
  );
};

export default TopPanel;
