import { type FC } from 'react';
import ApplicationCards from '../../../components/application-cards/application-cards';
import TopPanel from '../../../components/top-panel';
import { store } from '../../../utils/application-card.constans';
import { ReactComponent as ActiveApplicationIcon } from '../../../assets/icons/active-applications.svg';
import { type IActiveApplications } from '../../../utils/types/dataTypes';

const ActiveApplications: FC<IActiveApplications> = ({ type, size }) => {
  return (
    <>
      <TopPanel titleIcon={ <ActiveApplicationIcon /> } title="Активные заявки" />
        <ApplicationCards cardData={store} size={size} type ={type} ></ApplicationCards>
    </>
  );
};

export default ActiveApplications;
