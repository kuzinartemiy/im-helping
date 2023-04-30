/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../application-card/application-card';
import { store } from '../application-card/application-card.constans';
import RadiusSearch from '../radius-search';
import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import TopPanel from '../top-panel';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superadmin" element={<SuperAdminPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <TopPanel title='TEST' />
      <section className={styles.app__aplicationCards}>
        {store.aplicationCardData.map(aplicationCard => <AplicationCard key={aplicationCard.id} cardData={aplicationCard} />)}
      </section>
      <RadiusSearch />
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
      </Modal>}
      <Footer />
    </>
  );
}

export default App;
