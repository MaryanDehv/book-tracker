import { CheckIcon, CheckMark, CloseIcon, FilterIcon, SearchIcon, TimesIcon , ClockIcon, ListIcon} from "../../images/icons/customIcons";
import { useContext, useEffect, useState} from "react";
import { search } from "../../functions/_search";
import BookCard from "../cards/BookCard";
import BookProgress from "../cards/BookProgress";
import BookList from "../cards/BookList";
import bookData from "../../data/data";
import {DataContext} from "../../App"
import { check } from "../../functions/_helper";

const initialFilterState = [
    {
        name: "Completed",
        color: "green",
        checked: false,
    },{
        name: "Ongoing",
        color: "red",
        checked: false,
    } ,{
        name: "List",
        color: "purple",
        checked: false,
    }
]

const Search = ({mobileDropdown , toggleMobileSearch}) => {
    // This component is being used in the sidebar component for mobile -> evaluates whether to enable dropdown functionality
    const [searchDropdown , setSearchDropdown] = useState(mobileDropdown ? true : false)
    // these states are being passed to external file functions/_search.js
    const [searchInput , setSearchInput] = useState("") // contains user search input
    const [searchedData , setSearchedData] = useState(""); // contains books dependant on filter and search input
    const [filterDropdown , setFilterDropdown] = useState(false); // controls whether to show filter checkbox in dropdown
    // const [filterOpt , setFilterOpt] = useState(initialFilterState); // contains all possible filter options and their checked state
    const {filterOpt} = useContext(DataContext)

    const states = {
        searchDropdown: {
            variable: searchDropdown ,
            set: setSearchDropdown
        } , 
        filterDropdown: {
            variable: filterDropdown ,
            set: setFilterDropdown
        }, 
        searchInput: {
            variable: searchInput ,
            set: setSearchInput
        }, 
        filterOpt: {
            variable: filterOpt.variable ,
            set: filterOpt.set
        },
        searchedData: {
            variable: searchedData,
            set: setSearchedData
        }
    }

    const { removeFilter, toggleFilterPanel, resetSearch, updateSearch, filterBooks } = 
        search(
            states,
            {
                BookCard,
                BookProgress,
                BookList,
                CheckIcon,
                ListIcon,
                ClockIcon,
                bookData
        });

    useEffect(() => {
        // only update search results either when a filter options is selected or new search input added
        setSearchedData(filterBooks(searchInput.toLowerCase().trim("")))
    } , [searchInput , filterOpt.variable])
    
    function getChecked(){
        // only return filter indicators for those that are checked
        return filterOpt.variable.filter(tag => tag.checked == true);
    }

    return(
        <div className={`search ${searchDropdown ? 'search-dropdown-panel' : ''}`}>
                
                {/* search input block */}
                <div className={`search-box-container flex v-center justify-sb`}>
                    <div className="flex v-center">
                        <div className="icon"><SearchIcon func={() => setSearchDropdown(!searchDropdown)} /></div>
                        <input type="text" placeholder="Search your library..." value={searchInput}  onChange={updateSearch} />
                    </div>

                    <div className="flex v-center">
                        <div className={`filter icon ${filterDropdown ? 'filter-active' : ''}`}><FilterIcon func={toggleFilterPanel} /></div>
                        <div className={`close icon ${!searchDropdown ? 'hidden' : ''}`}><CloseIcon func={() => resetSearch(toggleMobileSearch ? toggleMobileSearch.set : false)}/></div>
                    </div>
                </div>
                
                {/* dropdown section */}
                <div className={`search-dropdown ${filterDropdown ? 'filter-panel' : 'search-content-panel'}`}>
                    
                    {/* currently active filters */}
                    {
                        getChecked().length >= 1 ?
                        (
                            <div className="filtered">
                                <p> Filtered </p>
                                <div className="flex">
                                    {
                                        getChecked().map((tagName, index) => (<div key={index} className={`filter-item flex v-center ${tagName.color}`} data-tag={tagName.name.toLowerCase()}> {tagName.name} <TimesIcon func={() => removeFilter(tagName)}/></div>))
                                    }
                                </div>
                            </div>
                        )
                        : ""
                    }
                    
                    {/* search results */}
                    <div className={`search-dropdown-inner search-results`}>
                        {
                            searchedData.length >= 1 ?
                            searchedData.map(item => (item))
                            : searchInput == "" ? "" : (<div className="no-results"> Nothing found for <span className="search-input">{searchInput}</span></div>)
                        }
                    </div>


                    {/* filter options */}
                    <div className={`search-dropdown-inner filter-selection-group`}>
                        <div className={`search-dropdown-inner-group flex`}>
                            {
                                filterOpt.variable.map((tag , index) => (
                                    <div key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , filterOpt)} data-check={tag.name.toLowerCase()}>
                                        <div className={`${tag.color}`}>
                                            <CheckMark />
                                        </div>
                                        <p> {tag.name} </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Search;