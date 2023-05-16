import { useEffect } from 'react';
import { Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='h-100'>
      <AppHeader />
      <Toolbar />
      <Container className='pb-3 mt-3'>
        <Outlet />
      </Container>
    </div>
  );
};

export default Root;
