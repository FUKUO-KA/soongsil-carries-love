import { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Frame from './components/Frame/Frame';
import { Landing } from './pages/Landing/Landing';
import { LoginRegister } from './pages/LoginRegister/LoginRegister';

const queryClient = new QueryClient();

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
    ),
    children: [
      {
        path: '/',
        element: <div />,
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: '/sign',
        element: <LoginRegister />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    ),
    errorElement: <div>Error</div>,
    children: [...publicRoutes],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Frame>
      <RouterProvider router={router} />
    </Frame>
  );
};

export default App;
