import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/errorElement/Error';
import Root from '../layouts/Root';
const Blogs = lazy(() => import('../pages/Blogs'));
const Experiences = lazy(() => import('../pages/Experiences'));
const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Talks = lazy(() => import('../pages/Talks'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/projects',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Projects />
          </Suspense>
        ),
      },

      {
        path: '/experiences',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Experiences />
          </Suspense>
        ),
      },
      {
        path: '/blogs',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: '/talks',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Talks />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
