import { type FC } from 'react';
import ApplicationCard from '../application-card';
import styles from './application-cards.module.scss';
import { type IApplicationCard } from '../../utils/types/dataTypes';
import EmptyApplicationsCards from './empty-application-cards';
import CircleButton from '../common/circle-button';
import { ReactComponent as Plus } from '../../assets/icons/plus12.svg';
import Text from '../common/text';
import { COLORS } from '../../styles/colors';

const ApplicationCards: FC<IApplicationCard> = ({
  cardData,
  size = 'large',
  type,
}) => {
  return (
    <>
      {cardData.aplicationCardData.length === 0
        ? (
        <section className={styles.applicationCards__empty}>
          <EmptyApplicationsCards />
        </section>
        )
        : type === 'activeRecepient'
          ? (
        <div>
          <div className={styles.applicationCards__addAplicationContainer}>
            <CircleButton size={'large'}>
              <Plus />
            </CircleButton>
            <Text
              children={'Создать заявку'}
              size={'24'}
              color={COLORS.get('color-secondary')}
            />
          </div>
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
                  type={'activeRecepient'}
                  size={'small'}
                />
              ),
            )}
          </section>
        </div>
          )
          : (
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
              type={type}
              size={'large'}
            />
          ),
        )}
      </section>
          )}
    </>
  );
};

export default ApplicationCards;
