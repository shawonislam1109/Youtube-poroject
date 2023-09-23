import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    modalOpen: false,
    closeModal: true,
  },
  reducers: {
    updateModal: (state, action) => {
      state.modalOpen = action.payload;
    },
    closeModal: (state, action) => {
      state.closeModal = action.payload;
    },
  },
});

export const { updateModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
