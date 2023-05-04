/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Header from '../header';
import TypeApplications from '../type-applications';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages';
import { ReactComponent as ActiveApplicationIcon } from '../../assets/icons/active-applications.svg';
import { ReactComponent as ComplitedApplicationsIcon } from '../../assets/icons/completed-applications.svg';
import MapComponent from '../MapComponent';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  /* const [openPopup, setOpenPopup] = useState(false); */
  /*   const navigate = useNavigate(); */
  /*   const handleCloseIngredientInModal = () => {
    console.log(close);
    navigate('/');
  }; */
  /* const handleClose = () => {
    setOpenPopup(false);
  }; */

  return (
    <>
      <div className={styles.app} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/superadmin" element={<SuperAdminPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="recipient/*" element={<RecipientPage />}>
          <Route path='active-applications' element={<TypeApplications type={'activeRecepient'} size={'small'} title={'Активные заявки'} titleIcon= {<ActiveApplicationIcon />}/>} />
          <Route path='complited-applications' element={<TypeApplications type={'complited'} size={'large'} title={'Завершенные заявки'} titleIcon= {<ComplitedApplicationsIcon />}/>} />
        </Route>
        <Route path="/volunteer/*" element={<VolunteerPage />} >
          <Route path='map-applications' element={<YMaps><MapComponent/></YMaps>} />
          <Route path='active-applications' element={<TypeApplications type={'activeVolunteer'} size={'large'} title={'Активные заявки'} titleIcon= {<ActiveApplicationIcon />}/>} />
          <Route path='complited-applications' element={<TypeApplications type={'complited'} size={'large'} title={'Завершенные заявки'} titleIcon= {<ComplitedApplicationsIcon />}/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
