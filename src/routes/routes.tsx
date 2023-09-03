import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookList from "../components/ui/BookList";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import ReadlingList from "../pages/ReadlingList";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateBook from "../pages/UpdateBook";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/reading-list/:email",
        element: (
          <PrivateRoute>
            <ReadlingList />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default routes;
