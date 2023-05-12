import TopPanel from '../top-panel';
import ApplicationCards from '../application-cards';
import { useStore } from '../../services/store';

export interface ITypeApplicationsProps {
  type: 'activeRecepient' | 'activeVolunteer' | 'completed'
  size: 'small' | 'large'
  title: string
  titleIcon: React.ReactNode
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
      {type === 'completed' && (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
          filterType={'CompletedFilterPopup'}
        />
      )}
      {type === 'activeRecepient' && (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
          filterType={'RecipientFilterPopup'}
        />
      )}
      {type === 'activeVolunteer' && (
        <TopPanel
          titleIcon={titleIcon}
          title={title}
          filterType={'ActiveFilterPopup'}
        />
      )}
      <ApplicationCards applicationCards={applicationCards} size={size} />
    </>
  );
};

export default TypeApplications;
