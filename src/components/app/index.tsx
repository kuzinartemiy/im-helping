/* import { useNavigate } from 'react-router-dom'; */
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import RadiusSearch from '../radius-search';
import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import NavCards from '../nav-cards';

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
      <RadiusSearch />
      <Button viewType = 'primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
            onClose={() => { handleClose(); }}
          >
            <NavCards></NavCards>
      </Modal>}
      <Footer />
    </>
  );
}

export default App;
