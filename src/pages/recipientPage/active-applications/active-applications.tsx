import ApplicationCards from '../../../components/application-cards/application-cards';
import TopPanel from '../../../components/top-panel';
import { store } from '../../../utils/application-card.constans';
import { ReactComponent as ActiveApplicationIcon } from '../../../assets/icons/active-applications.svg';

const ActiveApplications = () => {
  return (
    <>
      <TopPanel titleIcon={ <ActiveApplicationIcon /> } title="Активные заявки" />
        <ApplicationCards cardData={store} size={'small'} type ={'active'} ></ApplicationCards>
    </>
  );
};

export default ActiveApplications;
