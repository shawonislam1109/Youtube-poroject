import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setUrl, updateModal } from "../Feature/ModalSlice";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
const schema = yup.object({
  playlistLink: yup
    .string()
    .required("This is required field")
    .matches("list", "Enter Valid Url Link"),
});
export default function BasicModal() {
  const { modalOpen } = useSelector((state) => state.ModalSlice);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitData = (data) => {
    dispatch(setUrl(data.playlistLink));
  };

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
          <form onSubmit={handleSubmit(submitData)}>
            <TextField
              {...register("playlistLink")}
              variant="standard"
              fullWidth
              label="Playlist ID or Link"
              error={!!errors?.playlistLink}
              helperText={errors?.playlistLink?.message}
              sx={{ mt: 3 }}
            />
            <Box display="flex" justifyContent="end" gap={2} mt={3}>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => dispatch(updateModal(false))}>
                close
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary">
                Add playlist
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
