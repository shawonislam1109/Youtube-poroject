import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../Feature/ModalSlice";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "50%" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function BasicModal() {
  const { modalOpen } = useSelector((state) => state.ModalSlice);
  console.log(modalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => dispatch(updateModal(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Playlist
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            To add a new playlist please insert the playlist id or playlist
            link. Please make sure the link is correct. Otherwise we wont able
            to fetch the playlist information.
          </Typography>
          <TextField
            variant="standard"
            fullWidth
            sx={{ my: "8px" }}
            label="PlayList ID or Link"
          />
          <Box display="flex" justifyContent="end" gap={2} mt={1}>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => dispatch(updateModal(false))}>
              close
            </Button>
            <Button variant="contained" size="small" color="primary">
              Add playlist
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}