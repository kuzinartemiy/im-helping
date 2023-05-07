// import styles from './admin-page.module.scss';

import { useEffect } from 'react';
import { useSetTitleAdminPage } from '.';
import { AdminPageTitle } from '../../types';

const StatisticsApp = () => {
  const { setTitle } = useSetTitleAdminPage();

  useEffect(() => setTitle(AdminPageTitle.statistics), []);
  return <div>StatisticsApp Page</div>;
};

export default StatisticsApp;
