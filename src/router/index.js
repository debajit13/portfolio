import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/errorElement/Error';
import Root from '../layouts/Root';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
