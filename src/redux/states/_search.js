import { createSlice } from "@reduxjs/toolkit";
import { check, dataObject } from "../../functions/_helper";
import { ClockIcon , CheckIcon , ListIcon} from "../../images/icons/customIcons";
import SectionTitle from "../../components/headings/SectionTitle";
import { getBooksByName } from "../../functions/_filtering";
import BookCard from "../../components/cards/BookCard";
import BookList from "../../components/cards/BookList";
import BookProgress from "../../components/cards/BookProgress";

export const searchSlice = createSlice({
    name: "check" , 
    initialState: {
        filter: false,
        status: [...dataObject('status')],
        dropdown: false,
        input: "",
        searchResults: false
    },
    reducers: {
        setFilterStatus: check ,
        filterPanel: (state) => {
            state.filter = !state.filter
            if(state.filter) state.dropdown = true
        },
        dropdownPanel: (state , action) => {
            if(action.payload == "close"){
                state.dropdown = false
                state.filter = false
                if(state.input) state.input = "" 
            }
            if(action.payload == "open") state.dropdown = true
            if(!state.dropdown) state.filter = false
        },
        searchInput: (state , action) => {
            const value = action.payload;
            state.input = value;
            if(state.input != ""){
                state.dropdown = true
            } else {
                state.dropdown = false
                if(state.filter) state.filter = false
            }
        },
        constructSearchResults: (state) => {
            const searchData = getBooksByName(state.input);
            const filterData = [];
            if(state.status){
                const selectedFilterOptions = state.status.filter(tag => tag.checked == true);
                selectedFilterOptions.forEach(({name}) => filterData.push(name.toLowerCase()))
            }

            let sortedSearchData = {};
    
            const jsx = ({component: Component , status}) => (
            <div className={`search-dropdown-inner-group ${status == "ongoing" ? "grayed" : ""}`}>
                <SectionTitle title={{icon: status == "ongoing" ? ClockIcon : status == "complete" ? CheckIcon : ListIcon , name: status}} icon={false} />
                <div className="section-list">
                    {
                        searchData.map((result , index)  => result.status == status ? <Component key={index} content={result} /> : "")
                    }
                </div>
            </div>)
    
            const setSortedSearchData = (book) => {
                sortedSearchData[book.status] = jsx({
                    component: getComponent(book.status),
                    status: book.status,
                }); 
            }
    
            searchData.forEach(book => {
                if(!sortedSearchData[book.status]){
                    if(filterData.length >= 1){
                        filterData.forEach(filterTag => {
                            if(book.status == filterTag) setSortedSearchData(book)
                        })
                    } else {
                        setSortedSearchData(book)
                    }
                }
            })

            
            let convertedToArray = [];
    
            for(const key in sortedSearchData){
                convertedToArray.push(sortedSearchData[key])
            }

            function getComponent(status){
                if(status == 'completed') return BookCard
                if(status == 'ongoing') return BookProgress
                if(status == 'list') return BookList
            }

            state.searchResults = convertedToArray
        }
    }
});


export const {setFilterStatus , filterPanel , dropdownPanel , searchInput , constructSearchResults} = searchSlice.actions;


export default searchSlice.reducer;