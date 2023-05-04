import { type FC } from 'react';
import { type ITypeApplications } from '../../utils/types/dataTypes';
import { store } from '../../utils/application-card.constans';
import TopPanel from '../top-panel';
import ApplicationCards from '../application-cards/application-cards';

const TypeApplications: FC<ITypeApplications> = ({ type, size, title, titleIcon }) => {
  return (
    <>
      <TopPanel titleIcon={titleIcon } title={title} />
        <ApplicationCards cardData={store} size={size} type ={type} ></ApplicationCards>
    </>
  );
};

export default TypeApplications;
