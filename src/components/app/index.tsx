/* import { useNavigate } from 'react-router-dom'; */
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../application-card/application-card';
import { store } from '../application-card/application-card.constans';
import RadiusSearch from '../radius-search';
import Modal from '../modal';
import Button from '../button';
import { useCallback, useState } from 'react';
import NavCards from '../nav-cards';
import TopPanel from '../top-panel';
import CompletedFilterPopup from '../completed-filter-popup';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [isVisible, setVisible] = useState(false); // флаг для отображения попапа c фильтрацией
  const [styled, setStyled] = useState<{ right?: number, top?: number }>({}); // стили для определения местоположения CompletedFilterPopup
  /*   const navigate = useNavigate(); */
  /*   const handleCloseIngredientInModal = () => {
    console.log(close);
    navigate('/');
  }; */
  const handleClose = () => {
    setOpenPopup(false);
  };

  const onFilterClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setVisible(true);
    const right = e.currentTarget.getBoundingClientRect().right;
    const top = e.currentTarget.getBoundingClientRect().top;
    const numRight = Number(right.toString().replace(/[^\d.]/gi, ''));
    const numTop = Number(top.toString().replace(/[^\d.]/gi, ''));
    setStyled({ right: numRight, top: numTop });
  }, []);

  return (
    <>
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <section className={styles.app__aplicationCards}>
        {store.aplicationCardData.map(aplicationCard => <AplicationCard key={aplicationCard.id} cardData={aplicationCard} />)}
      </section>
      <RadiusSearch />
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
        <NavCards></NavCards>
      </Modal>}
      <TopPanel title='TEST' onFilterClick={(e) => onFilterClick(e)} />
      {isVisible && <CompletedFilterPopup marginRight={114} marginTop={50} styled={styled} setVisible={setVisible}></CompletedFilterPopup>}
      <Footer />
    </>
  );
}

export default App;
