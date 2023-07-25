import { createSlice} from "@reduxjs/toolkit";


export const addLogSlice = createSlice({
    name: "log" , 
    initialState: {
        calendar: false,
        date: false
    },
    reducers: {
        toggleCalendar: (state , action) => {
            const task = action.payload;
            if(task == "close"){
                state.calendar = false
                state.date = false
            }
            if(task == "open") state.calendar = true
        },
        selectedDate: (state , action) => {
            state.date = action.payload
        },
        saveEntry: (state) => {
            state.calendar = false;
            state.date = false
        }
    } 
});


export const {toggleCalendar , selectedDate , saveEntry} = addLogSlice.actions;


export default addLogSlice.reducer;