import { createSlice } from "@reduxjs/toolkit";
import { check, dataObject } from "../../functions/_helper";

// nav and modal need their own status states but will be passed into this j

export const FilterSlice = createSlice({
    name: "filtering" , 
    initialState: {
       authors:dataObject('authors'),
       status:dataObject('status'),
       genre: dataObject('genre'),
       rating:0,
       progress:0,
    },
    reducers: {
        updateFilter: (state , action) => {
            const {content , targetState} = action.payload; 
            state[targetState] = content
        } , 
        select: check
    }
});


export const {updateFilter , select} = FilterSlice.actions;


export default FilterSlice.reducer;