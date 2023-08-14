import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  AddNewBook,
  Book,
  Books,
  EditBook,
  Home,
  Login,
  NotFound,
  Register,
  Whitelist,
} from "../Page";

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
        path: "books",
        element: <Books />,
      },
      {
        path: "whitelist",
        element: <Whitelist />,
      },
      {
        path: "add-book",
        element: <AddNewBook />,
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
