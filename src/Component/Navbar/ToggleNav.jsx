import { Box, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ToggleNav = () => {
  return (
    <Box
      position="sticky"
      top={0}
      sx={{
        width: "200px",
        height: "100vh",
        borderRight: "1px solid #DFE1E6",
        position: "sticky",
        top: "0",
        right: "0",
        bottom: "0",
      }}>
      <Button
        sx={{
          color: "black",
        }}>
        <YouTubeIcon
          sx={{
            width: "50px",
            height: "50px",
            color: "red",
          }}
        />
        Amar YouTube
      </Button>
      <Box display="flex" flexDirection="column" justifyContent="center" pl={2}>
        <Box>
          <Link to="/">
            <Button startIcon={<HomeIcon />} sx={{ color: "black" }}>
              Home
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/recent">
            <Button startIcon={<AccessTimeIcon />} sx={{ color: "black" }}>
              Recents
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/playlist">
            <Button startIcon={<PlaylistPlayIcon />} sx={{ color: "black" }}>
              Playlist
            </Button>
          </Link>
        </Box>
        <Box>
          <Link to="/favourite">
            <Button startIcon={<FavoriteIcon />} sx={{ color: "black" }}>
              Favourite
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ToggleNav;
