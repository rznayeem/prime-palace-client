import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../Layouts/Root';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import EstateDetails from '../pages/EstateDetails/EstateDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/estate_details/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/estateData.json'),
      },
    ],
  },
]);

export default router;
