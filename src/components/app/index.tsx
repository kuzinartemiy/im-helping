/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Box from '../box';
import Text from '../text';
import ApplicationCard from '../application-card/application-card';
import RadiusSearch from '../radius-search';
import MapProd from '../map';
import Header from '../header';
import Modal from '../modal';
import Button from '../button';
import { useState } from 'react';
import TopPanel from '../top-panel';
import TooltipMap from '../tooltip-map/tooltip-map';
import Volunteer from '../../pages/volunteer/volunteer';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [isAdminPopupOpen, setAdminPopupOpen] = useState(false);
  const [isVisible, setVisible] = useState(false); // флаг для отображения попапа c фильтрацией
  const [styled, setStyled] = useState<{ right: number, top: number }>({ right: 0, top: 0 }); // стили для определения местоположения CompletedFilterPopup
  /*   const navigate = useNavigate(); */
  /*   const handleCloseIngredientInModal = () => {
    console.log(close);
    navigate('/');
  }; */
  const handleClose = () => {
    setOpenPopup(false);
    setAdminPopupOpen(false);
  };

  const onFilterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setVisible(true);
    const x = e.currentTarget.getBoundingClientRect().x;
    const y = e.currentTarget.getBoundingClientRect().y;
    setStyled({ right: x, top: y });
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
        {store.aplicationCardData.map(aplicationCard => <ApplicationCard key={aplicationCard.id} cardData={aplicationCard} />)}
      </section>
      <RadiusSearch />
      <YMaps><MapProd/></YMaps>
      <Button viewType='primary' onClick={() => { setOpenPopup(true); }}>Открыть попап</Button>
      {openPopup && <Modal
        onClose={() => { handleClose(); }}
      >
      </Modal>}
      {isAdminPopupOpen && <AdminFilterPopup onClick={handleClose} />}
      <TooltipMap cardData={store.aplicationCardData[0]} id={ store.aplicationCardData[0].id }/>
      <Volunteer></Volunteer>
      <TopPanel title='TEST' onFilterClick={(e) => onFilterClick(e)} />
      {isVisible && <CompletedFilterPopup styled={styled} setVisible={setVisible}></CompletedFilterPopup>}
      <Footer />
    </>
  );
}

export default App;
