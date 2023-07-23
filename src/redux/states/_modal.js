import { createSlice} from "@reduxjs/toolkit";
import { check, dataObject } from "../../functions/_helper";


export const modalSlice = createSlice({
    name: "modal" , 
    initialState: {
       modal: false,
       status: [...dataObject('status')]
    },
    reducers: {
        modalType: (state , action) => {
            state.modal = {...action.payload}
        },
        closeModal: (state) => {
            state.modal = false
        },
        setFilterStatus: check
    }
});


export const {modalType , closeModal , setFilterStatus} = modalSlice.actions;


export default modalSlice.reducer;