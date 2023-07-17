import { createSlice } from "@reduxjs/toolkit";
import { convertToObjects, getStatusCategories } from "../../data/data";
import { check, dataObject } from "../../functions/_helper";

export const NavigationSlice = createSlice({
    name: "navigation" , 
    initialState: {
       mobileNav: false,
       mobileSearch: false,
       themeMode: 'dark',
       status: [...dataObject('status')]
    },
    reducers: {
        toggle: (state , action) => {
            state[action.payload] = !state[action.payload];
            if(action.payload == 'mobileSearch' && state.mobileSearch) state.mobileNav = true
            if(!state.mobileNav) state.mobileSearch = false
        },
        theme: (state , action) => {
            state.themeMode = action.payload
        },
        setFilterStatus: check
    }
});


export const {toggle , theme , setFilterStatus} = NavigationSlice.actions;


export default NavigationSlice.reducer;