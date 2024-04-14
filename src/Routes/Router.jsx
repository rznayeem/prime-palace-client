import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Root from '../Layouts/Root';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import EstateDetails from '../pages/EstateDetails/EstateDetails';
import Profile from '../pages/Profile/Profile';
import Contact from '../pages/Contact/Contact';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateProfile',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: '/estate_details/:id',
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/estateData.json'),
      },
    ],
  },
]);

export default router;
