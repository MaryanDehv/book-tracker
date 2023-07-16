import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "navigation" , 
    initialState: {
       modal: false
    },
    reducers: {
        modalType: (state , action) => {
            state.modal = {...action.payload}
        },
        closeModal: (state) => {
            state.modal = false
        }
    }
});


export const {modalType , closeModal} = modalSlice.actions;


export default modalSlice.reducer;