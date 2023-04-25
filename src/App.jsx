import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inbox from "./components/Inbox";
import { loader as emailLoader } from "./components/Inbox";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/inbox",
        element: <Inbox />,
        loader: emailLoader,
      },
      {
        path: "/starred",
        // element: <Inbox />,
      },
      {
        path: "/snoozed",
        // element: <Inbox />,
      },
      {
        path: "/sent",
        // element: <Inbox />,
      },
      {
        path: "/drafts",
        // element: <Inbox />,
      },
      {
        path: "/important",
        // element: <Inbox />,
      },
      {
        path: "/chats",
        // element: <Inbox />,
      },
      {
        path: "/scheduled",
        // element: <Inbox />,
      },
      {
        path: "/all-mail",
        // element: <Inbox />,
      },
      {
        path: "/spam",
        // element: <Inbox />,
      },
      {
        path: "/bin",
        // element: <Inbox />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
