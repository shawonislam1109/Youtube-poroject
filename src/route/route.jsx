import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/main/Main";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{}],
  },
]);
export default route;
