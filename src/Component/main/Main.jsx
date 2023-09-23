import { Outlet } from "react-router-dom";
import LeftSideNav from "../Navbar/LeftSideNav";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box display="flex">
      <Box position="sticky" top={0}>
        <LeftSideNav />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
