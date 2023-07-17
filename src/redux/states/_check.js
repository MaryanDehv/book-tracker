import { createSlice } from "@reduxjs/toolkit";
import { check, dataObject } from "../../functions/_helper";

export const checkSlice = createSlice({
    name: "check" , 
    initialState: {
       status: [...dataObject('status')]
    },
    reducers: {
        status: check
    }
});


export const {selectOption} = NavigationSlice.actions;


export default NavigationSlice.reducer;