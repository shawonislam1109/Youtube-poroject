import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default route;
