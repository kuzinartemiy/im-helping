/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../application-card/application-card';
import RadiusSearch from '../radius-search';
import MapProd from '../map';
import Header from '../header';
import Modal from '../modal';
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
} from '../../pages';
import DeletePopup from '../delete-popup/delete-popup';
import { YMaps } from '@pbe/react-yandex-maps';
import { store } from '../../utils/application-card.constans';

function App() {
  const [openPopup, setOpenPopup] = useState(true);
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
      <Header />
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
      <YMaps><MapProd/></YMaps>
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
        <DeletePopup />
      </Modal>}
      <Volunteer></Volunteer>
      <Footer />
    </>
  );
}

export default App;
