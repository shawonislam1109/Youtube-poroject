import { Button } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcon from "@mui/icons-material/Add";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ToggleNav from "./ToggleNav";

const LeftSideNav = () => {
  const [sideBtn, setSideBtn] = useState(false);
  return (
    <Box display="flex">
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "55px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "static",
        }}>
        <Box pt="1rem">
          {sideBtn ? (
            <Button
              onClick={() => setSideBtn(!sideBtn)}
              sx={{
                color: "primary.contrastText",
              }}>
              <MenuIcon />
            </Button>
          ) : (
            <Button
              onClick={() => setSideBtn(!sideBtn)}
              sx={{
                color: "primary.contrastText",
              }}>
              <CloseIcon />
            </Button>
          )}

          <Button
            sx={{
              color: "primary.contrastText",
            }}>
            <YouTubeIcon />
          </Button>
          <Button
            sx={{
              color: "primary.contrastText",
            }}>
            <AddIcon />
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
              color: "primary.contrastText",
              pb: "2rem",
            }}>
            <QuestionMarkIcon />
          </Button>
        </Box>
      </Box>
      <Box />
      <Box ml={2}>{!sideBtn && <ToggleNav />}</Box>
    </Box>
  );
};

export default LeftSideNav;