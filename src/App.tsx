import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import router from './router/index';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
