import MainLayout from '../layouts/main-layout';
import { createBrowserRouter } from 'react-router-dom';
import { AdminPage, HomePage, RecipientPage, SuperAdminPage, VolunteerPage } from '../pages';
import { ReactComponent as ActiveApplicationIcon } from '../assets/icons/active-applications.svg';
import { ReactComponent as ComplitedApplicationsIcon } from '../assets/icons/completed-applications.svg';
import TypeApplications from '../components/type-applications';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../components/map-component';
import ConfBlockApp from '../pages/adminPage/conf-block-app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: 'admin',
        element: <AdminPage />,
        children: [
          {
            path: 'confirmation-blocking-applications',
            element: <ConfBlockApp />,
          },
          {
            path: 'statistics',
            element: <p>Page 2</p>,
          },
          {
            path: 'creation-editing-applications',
            element: <p>Page 3</p>,
          },
        ],
      },
      {
        path: 'recipient/',
        element: <RecipientPage />,
        children: [
          {
            path: 'active-applications',
            element: (
              <TypeApplications
                type={'activeRecepient'}
                size={'small'}
                title={'Активные заявки'}
                titleIcon={<ActiveApplicationIcon />}
              />
            ),
          },
          {
            path: 'complited-applications',
            element: (
              <TypeApplications
                type={'complited'}
                size={'large'}
                title={'Завершенные заявки'}
                titleIcon={<ComplitedApplicationsIcon />}
              />
            ),
          },
        ],
      },
      {
        path: 'volunteer/',
        element: <VolunteerPage />,
        children: [
          {
            path: 'map-applications',
            element: (
              <YMaps>
                <MapComponent />
              </YMaps>
            ),
          },
          {
            path: 'active-applications',
            element: (
              <TypeApplications
                type={'activeVolunteer'}
                size={'large'}
                title={'Активные заявки'}
                titleIcon={<ActiveApplicationIcon />}
              />
            ),
          },
          {
            path: 'complited-applications',
            element: (
              <TypeApplications
                type={'complited'}
                size={'large'}
                title={'Завершенные заявки'}
                titleIcon={<ComplitedApplicationsIcon />}
              />
            ),
          },
        ],
      },
      {
        path: 'superadmin',
        element: <SuperAdminPage />,
      },
    ],
  },
]);
