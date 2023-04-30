/* import { useNavigate } from 'react-router-dom'; */
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../application-card/application-card';
import { store } from '../../utils/types/data/data';
import RadiusSearch from '../radius-search';
import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import NavCards from '../nav-cards';
import TopPanel from '../top-panel';
import TooltipMap from '../tooltip-map/tooltip-map';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  /*   const navigate = useNavigate(); */
  /*   const handleCloseIngredientInModal = () => {
    console.log(close);
    navigate('/');
  }; */
  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <div className={styles.app} />
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <section className={styles.app__aplicationCards}>
        { store.aplicationCardData.map(aplicationCard => <AplicationCard key={ aplicationCard.id } cardData={ aplicationCard } />) }
      </section>
      <RadiusSearch />
      <Button viewType = 'primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
            onClose={() => { handleClose(); }}
          >
            <NavCards></NavCards>
      </Modal>}
      <TopPanel title='TEST' />
      <TooltipMap cardData={store.aplicationCardData[0]} id={ store.aplicationCardData[0].id }/>
      <Footer />
    </>
  );
}

export default App;
