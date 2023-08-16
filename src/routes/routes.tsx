import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '@/pages/Books/AllBooks';
import SignIn from '@/pages/Auth/SignIn';
import SignUp from '@/pages/Auth/SignUp';
import AddBook from '@/pages/Books/AddBook';
import SingleBook from '@/pages/Books/SingleBook';
import UpdateBook from '@/pages/Books/UpdateBook';
import Wishlist from '@/pages/Wishlist/Wishlist';
import PlanToRead from '@/pages/PlanToRead/PlanToRead';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/user/signin',
        element: <SignIn />,
      },
      {
        path: '/user/signup',
        element: <SignUp />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/add-new-book',
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
      },
      {
        path: '/update-book/:id',
        element: <UpdateBook />,
      },
      {
        path: '/book/wishlist',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: '/book/plan-to-read',
        element: (
          <PrivateRoute>
            <PlanToRead />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default routes;
