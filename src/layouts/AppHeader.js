import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    key: 'home',
    path: '/',
  },
  {
    name: 'Projects',
    key: 'projects',
    path: '/projects',
  },
  {
    name: 'Experiences',
    key: 'experiences',
    path: '/experiences',
  },
  {
    name: 'Blogs',
    key: 'blogs',
    path: '/blogs',
  },
];

const Image = styled.img`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function AppHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <img
        src={logo}
        height='45px'
        className='m-2'
        style={{
          borderRadius: '50%',
        }}
        alt='Debajit Mallick'
      />
      <Divider />
      <List>
        {navItems.map((navItem) => (
          <Link key={navItem.key} to={navItem.path}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'left', color: '#fff' }}>
                <ListItemText>{navItem.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image
              src={logo}
              alt='Debajit Mallick'
              height='45px'
              className='d-xs-none'
              style={{
                borderRadius: '50%',
              }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link to={item.path} key={item.key}>
                  <Button sx={{ color: '#fff' }}>{item.name}</Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default AppHeader;
