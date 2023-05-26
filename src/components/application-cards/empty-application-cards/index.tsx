import styles from './empty-application-cards.module.scss';
import { COLORS } from '../../../styles/colors';
import { ReactComponent as CompletedApplicationsIcon } from '../../../assets/icons/completed applications-grey.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/Vector 2.svg';
import Text from '../../common/text';
import { ReactComponent as Plus } from '../../../assets/icons/plus12.svg';
import CircleButton from '../../common/circle-button';
import { useState } from 'react';
import CreateApplicationPopup from '../../modals/create-application-popup';
import { useStore } from '../../../services/store';

const EmptyApplicationsCards = () => {
  const [isCreateAppModalOpen, setCreateAppModalOpen] = useState<boolean>(false);
  const owner = useStore(state => state.owner);
  return (
    <>
      <div className={styles.emptyApplicationsCards}>
        <div className={styles.emptyApplicationsCards__info}>
          <CompletedApplicationsIcon />
          <Text size='24' color={COLORS.get('color-secondary')}>
            У Вас пока нет заявок
          </Text>
        </div>
        <div className={styles.emptyApplicationsCards__info}>
          <Text size='24' color={COLORS.get('color-primary')}>
            Хотите создать заявку?
          </Text>
          <div className={styles.emptyApplicationsCards__button}>
            <CircleButton onClick={() => setCreateAppModalOpen(true)} size={'large'}>
              <Plus />
            </CircleButton>
            <Arrow />
          </div>
        </div>
      </div>
      {isCreateAppModalOpen && <CreateApplicationPopup owner={owner} onClose={() => setCreateAppModalOpen(false)} />}
    </>
  );
};

export default EmptyApplicationsCards;
