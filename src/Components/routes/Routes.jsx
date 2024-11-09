import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../Pages/Home';
import Coffees from '../Pages/Coffees';
import DashBoard from '../Pages/DashBoard';
import CoffeeCards from '../CoffeeCards';
import CoffeesDetails from '../Pages/CoffeesDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCards />,
            loader: () => fetch('../coffees.json'),
          },
          {
            path: 'category/:category',
            element: <CoffeeCards />,
            loader: () => fetch('../coffees.json'),
          },
        ],
      },
      {
        path: '/coffees',
        element: <Coffees />,
        loader: () => fetch('../coffees.json'),
      },
      {
        path: '/deshboard',
        element: <DashBoard />,
      },
      {
        path: '/details/:id',
        element: <CoffeesDetails />,
        loader: () => fetch('coffees.json'),
      },
    ],
  },
]);

export default router;
