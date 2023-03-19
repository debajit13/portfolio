import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/errorElement/Error';
import Root from '../layouts/Root';
import Experiences from '../pages/Experiences';
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

      {
        path: '/experiences',
        element: <Experiences />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
