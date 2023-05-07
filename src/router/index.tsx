import MainLayout from '../layouts/main-layout';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AdminPage, BlogPage, HomePage, PrivacyPage, RecipientPage, SuperAdminPage, VolunteerPage } from '../pages';
import { ReactComponent as ActiveApplicationIcon } from '../assets/icons/active-applications.svg';
import { ReactComponent as ComplitedApplicationsIcon } from '../assets/icons/completed-applications.svg';
import TypeApplications from '../components/type-applications';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../components/map-component';
import ConfBlockApp from '../pages/adminPage/conf-block-app';
import CreatEditApp from '../pages/adminPage/creat-edit-app';
import StatisticsApp from '../pages/adminPage/statistics-app';
import SearchApp from '../pages/adminPage/search-app';
import Popular from '../pages/blog-page/popular/popular';
import ContactsPage from '../pages/contacts-page';
import Socials from '../pages/contacts-page/socials';
import Feedback from '../pages/contacts-page/feedback';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='/profile' />,
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
            element: <StatisticsApp />,
          },
          {
            path: 'creation-editing-applications',
            element: <CreatEditApp />,
          },
          {
            path: 'search-applications',
            element: <SearchApp />,
          },
        ],
      },
      {
        path: 'profile/recipient',
        element: <RecipientPage />,
        children: [
          {
            path: '',
            element: <Navigate to='/profile/recipient/active-applications' />,
          },
          {
            path: 'active-applications',
            element: (
              <TypeApplications
                type='activeRecepient'
                size='small'
                title='Активные заявки'
                titleIcon={<ActiveApplicationIcon/>}
              />
            ),
          },
          {
            path: 'completed-applications',
            element: (
              <TypeApplications
                type='completed'
                size='large'
                title='Завершенные заявки'
                titleIcon={<ComplitedApplicationsIcon />}
              />
            ),
          },
        ],
      },
      {
        path: 'profile/volunteer',
        element: <VolunteerPage />,
        children: [
          {
            path: '',
            element: <Navigate to='/profile/volunteer/map-applications' />,
          },
          {
            path: 'map-applications',
            element: (
              <YMaps>
                <MapComponent/>
              </YMaps>
            ),
          },
          {
            path: 'active-applications',
            element: (
              <TypeApplications
                type='activeVolunteer'
                size='large'
                title='Активные заявки'
                titleIcon= {<ActiveApplicationIcon />}
              />
            ),
          },
          {
            path: 'completed-applications',
            element: (
              <TypeApplications
                type='completed'
                size='large'
                title='Завершенные заявки'
                titleIcon= {<ComplitedApplicationsIcon />}
              />
            ),
          },
        ],
      },
      {
        path: 'blog',
        element: <BlogPage />,
        children: [
          {
            path: '',
            element: <Navigate to='blog/popular' />,
          },
          {
            path: 'popular',
            element: <Popular/>,
          },
          {
            path: 'category',
            element: <Popular/>,
          },
        ],
      },
      {
        path: 'superadmin',
        element: <SuperAdminPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
        children: [
          {
            path: '',
            element: <Navigate to='/contacts/socials' />,
          },
          {
            path: 'socials',
            element: <Socials />,
          },
          {
            path: 'feedback',
            element: <Feedback />,
          },
        ],
      },
    ],
  },
]);
