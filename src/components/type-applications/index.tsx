import TopPanel from '../top-panel';
import ApplicationCards from '../application-cards';
import CompletedFilterPopup from '../modals/completed-filter-popup';
import { useStore } from '../../services/store';

export interface ITypeApplicationsProps {
  type: 'activeRecepient' | 'activeVolunteer' | 'completed'
  size: 'small' | 'large'
  title: string
  titleIcon: any
}

const TypeApplications = ({
  type,
  size,
  title,
  titleIcon,
}: ITypeApplicationsProps) => {
  const applicationCards = useStore((state) => state.applicationCards);
  return (
    <>
      {type !== 'completed'
        ? (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
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
        applicationCards={applicationCards}
        size={size}
      />
    </>
  );
};

export default TypeApplications;
