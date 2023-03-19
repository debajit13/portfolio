import { Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const Root = () => {
  return (
    <div className='h-100'>
      <AppHeader />
      <Toolbar />
      <Container className='pb-3'>
        <Outlet />
      </Container>
      <AppFooter />
    </div>
  );
};

export default Root;
