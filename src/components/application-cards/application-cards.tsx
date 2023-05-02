import { type FC } from 'react';
import ApplicationCard from '../application-card/application-card';
import styles from './application-cards.module.scss';
import { type IApplicationCard } from '../../utils/types/dataTypes';
import EmptyApplicationsCards from './empty-application-cards/empty-application-cards';

const ApplicationCards: FC<IApplicationCard> = ({
  cardData,
  size = 'large',
}) => {
  return (
    <>
      {cardData.aplicationCardData.length !== 0
        ? (
        <section
          className={`${styles.applicationCards} ${
            styles[`applicationCards__${size}`]
          }`}
        >
          {cardData.aplicationCardData.map(
            (aplicationCard: IApplicationCard) => (
              <ApplicationCard
                key={aplicationCard.id}
                cardData={aplicationCard}
              />
            ),
          )}
        </section>
        )
        : (
        <section className={styles.applicationCards__empty}>
          <EmptyApplicationsCards />
        </section>
        )}
    </>
  );
};

export default ApplicationCards;
