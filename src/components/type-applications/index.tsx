import { type FC } from 'react';
import { type ITypeApplications } from '../../utils/types/dataTypes';
import { store } from '../../utils/application-card.constans';
import TopPanel from '../top-panel';
import ApplicationCards from '../application-cards/application-cards';
import ActiveFilterPopup from '../modals/active-filter-popup';
import CompletedFilterPopup from '../modals/completed-filter-popup';

const TypeApplications: FC<ITypeApplications> = ({
  type,
  size,
  title,
  titleIcon,
}) => {
  return (
    <>
      {type !== 'complited'
        ? (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
          children={<ActiveFilterPopup />}
        />
        )
        : (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
          children={<CompletedFilterPopup />}
        />
        )}
      <ApplicationCards
        cardData={store}
        size={size}
        type={type}
      ></ApplicationCards>
    </>
  );
};

export default TypeApplications;
