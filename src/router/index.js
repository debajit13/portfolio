import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/errorElement/Error';
import Root from '../layouts/Root';
import Blogs from '../pages/Blogs';
import Experiences from '../pages/Experiences';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Talks from '../pages/Talks';

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
    errorElement: <Error />,
  },
]);

export default router;
