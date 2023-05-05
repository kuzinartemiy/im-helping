/* import { useNavigate } from 'react-router-dom'; */
/* import { Route, Routes } from 'react-router-dom'; */
import styles from './app.module.scss';
import Footer from '../footer';
/* import Box from '../box';
import Text from '../text'; */
/* import AplicationCard from '../application-card/application-card';
import { store } from '../application-card/application-card.constans'; */
/* import RadiusSearch from '../radius-search'; */
import Header from '../header';
/* import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import TopPanel from '../top-panel';
import Volunteer from '../../pages/volunteer/volunteer';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages'; */
import MapRecepient from '../map-recepient';
import { YMaps } from '@pbe/react-yandex-maps';
/* import { store } from '../../utils/application-card.constans';
import ApplicationCard from '../application-card/application-card'; */

function App() {
  /* const [openPopup, setOpenPopup] = useState(false); */
  /*   const navigate = useNavigate(); */
  /*   const handleCloseIngredientInModal = () => {
    console.log(close);
    navigate('/');
  }; */
  /*   const handleClose = () => {
    setOpenPopup(false);
  }; */
  const API_KEY = '05f8d2ae-bd94-4329-b9f9-7351e2ec9627';
  return (
    <>
      <div className={styles.app} />
      <Header />
      <YMaps
      query={{
        apikey: API_KEY,
      }}><MapRecepient/></YMaps>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superadmin" element={<SuperAdminPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
      <Box>
        <Text tag='p' size='24' weight='700'>TEST</Text>
      </Box>
      <section className={styles.app__aplicationCards}>
        {store.aplicationCardData.map(aplicationCard => <ApplicationCard key={aplicationCard.id} cardData={aplicationCard} />)}
      </section>
      <RadiusSearch />
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
      </Modal>}
      <TopPanel title='TEST' />
      <Volunteer></Volunteer> */}
      <Footer />
    </>
  );
}

export default App;
