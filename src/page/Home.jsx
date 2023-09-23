import { Box } from "@mui/material";
import Recent from "./Recent";
import Playlist from "./Playlist";
import Favourite from "./Favourite";

const Home = () => {
  return (
    <Box>
      <Box minHeight={200}>
        <Recent />
      </Box>
      <Box minHeight={200}>
        <Playlist />
      </Box>
      <Box minHeight={200}>
        <Favourite />
      </Box>
    </Box>
  );
};

export default Home;
