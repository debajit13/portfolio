import { Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const Root = () => {
  return (
    <>
      <AppHeader />
      <Toolbar />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default Root;
