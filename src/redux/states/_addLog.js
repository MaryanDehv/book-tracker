import { createSlice} from "@reduxjs/toolkit";


export const addLogSlice = createSlice({
    name: "log" , 
    initialState: {
        calendar: false
    },
    reducers: {
        openCalendar: (state) => {
            state.calendar = true
        }
    }
});


export const {openCalendar} = addLogSlice.actions;


export default addLogSlice.reducer;