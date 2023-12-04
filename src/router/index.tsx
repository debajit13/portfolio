import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Experiences from '../pages/Experiences';
import Projects from '../pages/Projects';
import Talks from '../pages/Talks';
import ErrorPage from '../pages/ErrorPage';

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
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/talks',
        element: <Talks />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
