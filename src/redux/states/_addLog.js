import { createSlice} from "@reduxjs/toolkit";


export const addLogSlice = createSlice({
    name: "log" , 
    initialState: {
        calendar: false,
        date: false
    },
    reducers: {
        openCalendar: (state) => {
            state.calendar = !state.calendar
        },
        selectedDate: (state , action) => {
            state.date = action.payload
        }
    } 
});


export const {openCalendar , selectedDate} = addLogSlice.actions;


export default addLogSlice.reducer;