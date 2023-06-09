import { useState } from 'react';
import ApplicationCard from '../application-card';
import styles from './application-cards.module.scss';
import CircleButton from '../common/circle-button';
import { ReactComponent as Plus } from '../../assets/icons/plus12.svg';
import Text from '../common/text';
import { COLORS } from '../../styles/colors';
import CreateApplicationPopup from '../modals/create-application-popup';
import { type IApplicationCard } from '../../types';
import { useStore } from '../../services/store';
import EmptyApplicationsCards from './empty-application-cards';

interface IApplicationCardsProps {
  applicationCards: IApplicationCard[];
  size: string;
  isAddButton?: boolean;
}

const ApplicationCards = ({ applicationCards, size = 'large', isAddButton = false }: IApplicationCardsProps) => {
  const [isCreateAppModalOpen, setCreateAppModalOpen] = useState<boolean>(false);
  const owner = useStore(state => state.owner);
  return (
    <>
      {applicationCards.length > 0 ? (
        <div>
          {isAddButton && (
            <div className={styles.applicationCards__addAplicationContainer}>
              <CircleButton onClick={() => setCreateAppModalOpen(true)} size='large'>
                <Plus />
              </CircleButton>
              <Text size='24' color={COLORS.get('color-secondary')}>
                Создать заявку
              </Text>
            </div>
          )}
          <ul className={`${styles.applicationCards} ${styles[`applicationCards__${size}`]}`}>
            {applicationCards.map(applicationCard => (
              <li key={applicationCard.id}>
                <ApplicationCard card={applicationCard} />
              </li>
            ))}
          </ul>
          <div className={styles.applicationCards__opacity} />
        </div>
      ) : (
        <EmptyApplicationsCards />
      )}
      {isCreateAppModalOpen && <CreateApplicationPopup owner={owner} onClose={() => setCreateAppModalOpen(false)} />}
    </>
  );
};

export default ApplicationCards;
