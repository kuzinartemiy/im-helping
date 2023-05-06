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
import MapComponent from '../MapComponent';
import { YMaps } from '@pbe/react-yandex-maps';
import TooltipMap from '../tooltip-map/tooltip-map';


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

  const unfo = { id: '432423',
  owner: {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    phone: '8-800-555-35-35',
    avatar: 'https://s10.stc.yc.kpcdn.net/share/i/12/11441263/de-1200.jpg',
  },
  category: 'cat1',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente!',
  coord: [59.898513, 30.410314],
  qty: 7,
}

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
      <YMaps><MapComponent/></YMaps>
      <TooltipMap cardData={unfo} id={unfo.id}/>
      <Footer />
    </>
  );
}

export default App;
