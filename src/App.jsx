import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inbox from "./components/Inbox";
import { loader as emailLoader } from "./components/Inbox";
import Sent from "./components/Sent";
import { loader as sentEmailLoader } from "./components/Sent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
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
        element: <Sent />,
        loader: sentEmailLoader,
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
