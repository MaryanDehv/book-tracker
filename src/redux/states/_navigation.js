import { createSlice } from "@reduxjs/toolkit";

export const NavigationSlice = createSlice({
    name: "navigation" , 
    initialState: {
       mobileNav: false,
       mobileSearch: false,
       themeMode: 'dark'
    },
    reducers: {
        toggle: (state , action) => {
            state[action.payload] = !state[action.payload];
            if(action.payload == 'mobileSearch' && state.mobileSearch) state.mobileNav = true
            if(!state.mobileNav) state.mobileSearch = false
        },
        theme: (state , action) => {
            state.themeMode = action.payload
        }
    }
});


export const {toggle , theme} = NavigationSlice.actions;


export default NavigationSlice.reducer;