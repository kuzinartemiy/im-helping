/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import AplicationCard from '../application-card/application-card';
import { store } from '../application-card/application-card.constans';
import RadiusSearch from '../radius-search';
import Header from '../header';
import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import TopPanel from '../top-panel';
import PersonVolunteer from '../person-volunteer';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages';
import ServiceButton from '../service-button';

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

  const test = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcId3roctkMS-wX26vViSB2FNUOI-bfaSZw&usqp=CAU',
    name: 'John Cena',
    id: '0034321',
    phone: '88005553535',
    about: 'I love music, books and scss I love music, books and scss I love music, books and scss',
    progress: 2,
    counters: {
      faces: 2500,
      keys: 1,
      hands: 150,
    },
  };

  return (
    <>
      <div className={styles.app} />
      <Header />
      <PersonVolunteer {...test} />
      <ServiceButton viewType='edit' disabled /><ServiceButton viewType='close' /><ServiceButton viewType='approved' disabled/>
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
      <section className={styles.app__aplicationCards}>
        {store.aplicationCardData.map(aplicationCard => <AplicationCard key={aplicationCard.id} cardData={aplicationCard} />)}
      </section>
      <RadiusSearch />
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
      </Modal>}
      <TopPanel title='TEST' />
      <Footer />
    </>
  );
}

export default App;
