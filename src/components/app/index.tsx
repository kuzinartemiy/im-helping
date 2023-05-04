/* import { useNavigate } from 'react-router-dom'; */
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Footer from '../footer';
import Header from '../header';
import {
  HomePage,
  SuperAdminPage,
  AdminPage,
  VolunteerPage,
  RecipientPage,
} from '../../pages';
import ActiveApplications from '../../pages/recipientPage/active-applications/active-applications';
import ComplitedApplications from '../../pages/recipientPage/complited-applications/complited-applications';

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
          <Route path='active-applications' element={<ActiveApplications />} />
          <Route path='complited-applications' element={<ComplitedApplications />} />
        </Route>
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
