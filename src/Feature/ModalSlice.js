import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    modalOpen: false,
    url: "",
  },
  reducers: {
    updateModal: (state, action) => {
      state.modalOpen = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { updateModal, setUrl } = ModalSlice.actions;

export default ModalSlice.reducer;
