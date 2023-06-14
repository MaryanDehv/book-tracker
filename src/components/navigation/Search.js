import { CheckIcon, CheckMark, CloseIcon, FilterIcon, SearchIcon, TimesIcon , ClockIcon, ListIcon} from "../../images/icons/customIcons";
import { useEffect, useState} from "react";
import { search } from "../../functions/_search";
import BookCard from "../cards/BookCard";
import BookProgress from "../cards/BookProgress";
import BookList from "../cards/BookList";
import bookData from "../../data/data";

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
    const [searchDropdown , setSearchDropdown] = useState(mobileDropdown ? true : false)
    const [searchInput , setSearchInput] = useState("")
    const [searchedData , setSearchedData] = useState("");
    const [filterDropdown , setFilterDropdown] = useState(false);
    const [filterOpt , setFilterOpt] = useState(initialFilterState);

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
            variable: filterOpt ,
            set: setFilterOpt
        },
        searchedData: {
            variable: searchedData,
            set: setSearchedData
        }
    }

    const {removeFilter , check , toggleFilterPanel , resetSearch , updateSearch , filterBooks} = search(states , {BookCard , BookProgress , BookList, CheckIcon , ListIcon, ClockIcon , bookData});

    useEffect(() => {
        setSearchedData(filterBooks(searchInput.toLowerCase().trim("")))
    } , [searchInput , filterOpt])
    
    function getChecked(){
        return filterOpt.filter(tag => tag.checked == true);
    }

    return(
        <div className={`search ${searchDropdown ? 'search-dropdown-panel' : ''}`}>
                    <div className={`search-container flex v-center justify-sb`}>
                        <div className="flex v-center">
                            <div className="icon"><SearchIcon func={() => setSearchDropdown(!searchDropdown)} /></div>
                            <input type="text" placeholder="Search your library..." value={searchInput}  onChange={updateSearch} />
                        </div>

                        <div className="flex v-center">
                            <div className={`filter icon ${filterDropdown ? 'filter-active' : ''}`}><FilterIcon func={toggleFilterPanel} /></div>
                            <div className={`close icon ${!searchDropdown ? 'hidden' : ''}`}><CloseIcon func={() => resetSearch(toggleMobileSearch)}/></div>
                        </div>
                    </div>
                <div className={`search-dropdown ${filterDropdown ? 'filter-panel' : 'search-content-panel'}`}>
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
                    <div className={`search-dropdown-inner search-results`}>
                        {
                            searchedData.length >= 1 ?
                            searchedData.map(item => (item))
                            : searchInput == "" ? "" : (<div className="no-results"> Nothing found for <span className="search-input">{searchInput}</span></div>)
                        }
                    </div>



                    <div className={`search-dropdown-inner filter-selection-group`}>
                        <div className={`search-dropdown-inner-group flex`}>
                            {
                                filterOpt.map((tag , index) => (
                                    <div key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , tag)} data-check={tag.name.toLowerCase()}>
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