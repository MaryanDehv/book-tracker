import { CheckIcon, CheckMark, CloseIcon, FilterIcon, SearchIcon, TimesIcon , ClockIcon, ListIcon} from "../../images/icons/customIcons";
import { useContext, useEffect, useState} from "react";
import { search } from "../../functions/_search";
import BookCard from "../cards/BookCard";
import BookProgress from "../cards/BookProgress";
import BookList from "../cards/BookList";
import {DataContext} from "../../App"
import { check, dataObject } from "../../functions/_helper";
import SectionTitle from "../headings/SectionTitle";
import Checkboxes from "../utils/Checkboxes";

const Search = ({mobileDropdown , toggleMobileSearch}) => {
    // This component is being used in the sidebar component for mobile -> evaluates whether to enable dropdown functionality
    const searchDropdown = useState(mobileDropdown ? true : false)
    const searchInput = useState("")
    const searchedData = useState("");
    const filterDropdown = useState(false);
    const {status} = useContext(DataContext)

    const {toggleFilterPanel, removeSearch, updateSearchInput, getBooks } = 
        search(
            {
                searchDropdown, 
                searchInput,  
                filterDropdown,
                status
            },
            {
                BookCard,
                BookProgress,
                BookList,
                CheckIcon,
                ListIcon,
                ClockIcon,
                SectionTitle
            }
        );

    useEffect(() => {
        // only update search results either when a filter options is selected or new search input added
        searchedData[1](getBooks(searchInput[0].toLowerCase().trim("")))
    } , [searchInput[0] , status.variable])
    
    function getChecked(){
        // only return filter indicators for those that are checked
        return status.variable.filter(tag => tag.checked == true);
    }

    return(
        <div className={`search ${searchDropdown[0] ? 'search-dropdown-panel' : ''}`}>
                
                {/* search input block */}
                <div className={`search-box-container flex v-center justify-sb`}>
                    <div className="flex v-center">
                        <div className="icon"><SearchIcon func={() => searchDropdown[1](!searchDropdown[0])} /></div>
                        <input type="text" placeholder="Search your library..." value={searchInput[0]}  onChange={updateSearchInput} />
                    </div>

                    <div className="flex v-center">
                        <div className={`filter icon ${filterDropdown[0] ? 'filter-active' : ''}`}><FilterIcon func={toggleFilterPanel} /></div>
                        <div className={`close icon ${!searchDropdown ? 'hidden' : ''}`}><CloseIcon func={() => removeSearch(toggleMobileSearch ? toggleMobileSearch.set : false)}/></div>
                    </div>
                </div>
                
                {/* dropdown section */}
                <div className={`search-dropdown ${filterDropdown[0] ? 'filter-panel' : 'search-content-panel'}`}>
                    
                    {/* currently active filters */}
                    {
                        getChecked().length >= 1 ?
                        (
                            <div className="filtered">
                                <p> Filtered </p>
                                <div className="flex">
                                    {
                                        getChecked().map((tagName, index) => (<div key={index} className={`filter-item flex v-center ${dataObject('config')['status'].colors[tagName.name]}`} data-tag={tagName.name.toLowerCase()}> {tagName.name} <TimesIcon func={() => check(tagName.name , status)}/></div>))
                                    }
                                </div>
                            </div>
                        )
                        : ""
                    }
                    
                    {/* search results */}
                    <div className={`search-dropdown-inner flex flex-column search-results`}>
                        {
                            searchedData[0].length >= 1 ?
                            searchedData[0].map(item => (item))
                            : searchInput[0] == "" ? "" : (<div className="no-results"> Nothing found for <span className="search-input">{searchInput[0]}</span></div>)
                        }
                    </div>


                    {/* filter options */}
                    <div className={`search-dropdown-inner filter-selection-group`}>
                        <div className={`search-dropdown-inner-group flex check-boxes-container`}>
                           <Checkboxes contents={status} groupName={"status"}/>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Search;