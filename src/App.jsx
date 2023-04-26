import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Inbox from "./components/Inbox";
import { loader as emailLoader } from "./components/Inbox";
import Sent from "./components/Sent";
import { loader as sentEmailLoader } from "./components/Sent";
import Starred from "./components/Starred";
import Drafts from "./components/Drafts";
import { loader as draftEmailLoader } from "./components/Drafts";
import EmailView from "./components/EmailView";
import { loader as emailViewLoader } from "./components/EmailView";
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
        element: <Starred />,
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
        element: <Drafts />,
        loader: draftEmailLoader,
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
      {
        path: "/:emailId",
        element: <EmailView />,
        loader: emailViewLoader,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
