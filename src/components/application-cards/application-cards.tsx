import { type FC } from 'react';
import ApplicationCard from '../application-card/application-card';
import styles from './application-cards.module.scss';
import { type IApplicationCard } from '../../utils/types/dataTypes';

const ApplicationCards: FC<IApplicationCard> = ({ cardData }) => {
  return (
    <section className={styles.aplicationCards}>
      {cardData.aplicationCardData.map((aplicationCard: IApplicationCard) => (
        <ApplicationCard key={aplicationCard.id} cardData={aplicationCard} />
      ))}
    </section>
  );
};

export default ApplicationCards;
