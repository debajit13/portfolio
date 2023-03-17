import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/errorElement/Error';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
