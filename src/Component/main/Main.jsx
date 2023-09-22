import { Outlet } from "react-router-dom";
import LeftSideNav from "../Navbar/LeftSideNav";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <div>
      <Box display="flex">
        <Box>
          <LeftSideNav />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Main;
