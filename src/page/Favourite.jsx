import { Box, Typography } from "@mui/material";

const Favourite = () => {
  return (
    <Box ml={{ xs: 0, md: 2 }} mt={{ xs: 2, md: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        No Favourite
      </Typography>
      <Box ml={{ xs: 2, md: 3 }}>
        <Typography variant="body1">No Favourite</Typography>
      </Box>
    </Box>
  );
};

export default Favourite;
