import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import useThemeStore from './store/themeStore';

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

  const {
    activeTheme,
  } = useThemeStore();

  return (
    <div className={`
    APP-CONTAINER
    flex flex-col lg:justify-center
    pt-5 lg:pt-0    
    h-screen w-screen
    transition-colors ease-in-out duration-300
    ${activeTheme.text.general}
    ${activeTheme.bg.page}`}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
