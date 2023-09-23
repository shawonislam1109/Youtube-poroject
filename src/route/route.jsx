import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/main/Main";
import Playlist from "../page/Playlist";
import Recent from "../page/Recent";
import Home from "../page/Home";
import Favourite from "../page/Favourite";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
    ],
  },
]);
export default route;
