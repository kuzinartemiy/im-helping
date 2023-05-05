import MainLayout from '../layouts/main-layout';
import { createBrowserRouter } from 'react-router-dom';
import { AdminPage, HomePage, RecipientPage, SuperAdminPage, VolunteerPage, BlogPage } from '../pages';
import { ReactComponent as ActiveApplicationIcon } from '../assets/icons/active-applications.svg';
import { ReactComponent as ComplitedApplicationsIcon } from '../assets/icons/completed-applications.svg';
import TypeApplications from '../components/type-applications';
import { YMaps } from '@pbe/react-yandex-maps';
import MapComponent from '../components/map-component';
import Popular from '../pages/blogPage/popular/popular';

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
        element: (
          <AdminPage />
        ),
      },
      {
        path: 'recipient/',
        element: (
          <RecipientPage />
        ),
        children: [
          {
            path: 'active-applications',
            element: (
              <TypeApplications type={'activeRecepient'} size={'small'} title={'Активные заявки'} titleIcon= {<ActiveApplicationIcon />}/>
            ),
          },
          {
            path: 'complited-applications',
            element: (
              <TypeApplications type={'complited'} size={'large'} title={'Завершенные заявки'} titleIcon= {<ComplitedApplicationsIcon />}/>
            ),
          },
        ],
      },
      {
        path: 'volunteer/',
        element: (
          <VolunteerPage />
        ),
        children: [
          {
            path: 'map-applications',
            element: (
              <YMaps><MapComponent/></YMaps>
            ),
          },
          {
            path: 'active-applications',
            element: (
              <TypeApplications type={'activeVolunteer'} size={'large'} title={'Активные заявки'} titleIcon= {<ActiveApplicationIcon />}/>
            ),
          },
          {
            path: 'complited-applications',
            element: (
              <TypeApplications type={'complited'} size={'large'} title={'Завершенные заявки'} titleIcon= {<ComplitedApplicationsIcon />}/>
            ),
          },
        ],
      },
      {
        path: 'blog/',
        element: (
          <BlogPage />
        ),
        children: [
          {
            path: 'popular',
            element: (
              <Popular/>
            ),
          },
          {
            path: 'category',
            element: (
              <Popular/>
            ),
          },
        ],
      },
      {
        path: 'superadmin',
        element: (
          <SuperAdminPage />
        ),
      },
    ],
  },
]);
