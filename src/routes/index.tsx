import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/login";
import NotFound from "../Page/NotFound";
import Home from "../Page/home";
import AddNewBook from "../Page/AddBook";
import Book from "../Page/Book";
import EditBook from "../Page/EditBook";
import Register from "../Page/Register";
import Whitelist from "../Page/Whitelist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-book",
        element: <AddNewBook />,
      },
      {
        path: "whitelist",
        element: <Whitelist />,
      },
      {
        path: "book/:id",
        element: <Book />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
