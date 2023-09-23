import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../Feature/ModalSlice";
import { useEffect, useState } from "react";

const Playlist = () => {
  const { url } = useSelector((state) => state.ModalSlice);
  console.log(url);
  const dispatch = useDispatch();
  const [getUrlData, setGetUrlData] = useState({});
  console.log(getUrlData);

  useEffect(() => {
    try {
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=key=${url}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGetUrlData(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [url]);

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
