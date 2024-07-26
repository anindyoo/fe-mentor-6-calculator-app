import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';

const App = () => {
  const routes = [
    {
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ];

  const routeConfig = {
    basename: '/fe-mentor-6-calculator-app',
  };

  const router = createBrowserRouter(routes, routeConfig);

  return (
    <div className={`
    APP-CONTAINER
    h-screen w-screen
    `}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
