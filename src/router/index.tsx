import MainLayout from '../layouts/main-layout';
import { createBrowserRouter } from 'react-router-dom';
import { AdminPage, HomePage, RecipientPage, SuperAdminPage, VolunteerPage } from '../pages';

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
        path: 'recipient',
        element: (
          <RecipientPage />
        ),
      },
      {
        path: 'volunteer',
        element: (
          <VolunteerPage />
        ),
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
