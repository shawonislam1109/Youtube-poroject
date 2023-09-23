import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateModal } from "../Feature/ModalSlice";

const Playlist = () => {
  const dispatch = useDispatch();

  return (
    <Box ml={{ xs: 0, md: 2 }} mt={{ xs: 2, md: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        All Playlist
      </Typography>
      <Box ml={{ xs: 2, md: 3 }}>
        <Typography variant="body1">No playlist</Typography>
        <Button
          sx={{ mt: 2 }}
          onClick={() => dispatch(updateModal(true))}
          variant="outlined">
          Add Playlist
        </Button>
      </Box>
    </Box>
  );
};

export default Playlist;
