import {CloseIcon, FilterIcon, SearchIcon, TimesIcon} from "../../images/icons/customIcons";
import {useEffect, useState} from "react";
import {dataObject } from "../../functions/_helper";
import Checkboxes from "../utils/Checkboxes";
import { useDispatch, useSelector } from "react-redux";
import { filterPanel, setFilterStatus , dropdownPanel , searchInput, constructSearchResults} from "../../redux/states/_search";

const Search = () => {
    // This component is being used in the sidebar component for mobile -> evaluates whether to enable dropdown functionality
    const searchedData = useState("");

    const dispatch = useDispatch()

    const {status , filter , dropdown , input , searchResults} = useSelector(state => state.search);
    const {mobileNav} = useSelector(state => state.navigation)

    useEffect(() => {
        // only update search results either when a filter options is selected or new search input added
        dispatch(constructSearchResults())
    } , [input , status])
    
    function getChecked(){
        // only return filter indicators for those that are checked
        return status.filter(tag => tag.checked == true);
    }

    return(
        <div className={`search ${dropdown || mobileNav ? 'search-dropdown-panel' : ''}`}>
                
                {/* search input block */}
                <div className={`search-box-container flex v-center justify-sb`}>
                    <div className="flex v-center">
                        <div className="icon"><SearchIcon func={() => dispatch(dropdownPanel('open'))} /></div>
                        <input type="text" placeholder="Search your library..." value={input}  onChange={(el) => dispatch(searchInput(el.target.value))} />
                    </div>

                    <div className="flex v-center">
                        <div className={`filter icon ${filter ? 'filter-active' : ''}`}><FilterIcon func={() => dispatch(filterPanel())} /></div>
                        <div className={`close icon ${!dropdown ? 'hidden' : ''}`}><CloseIcon func={() => dispatch(dropdownPanel('close'))}/></div>
                    </div>
                </div>
                
                {/* dropdown section */}
                <div className={`search-dropdown`}>

                    {
                        filter ? 
                        (
                            <>
                            {/* filter options */}
                            <div className={`search-dropdown-inner filter-selection-group`}>
                                <div className={`search-dropdown-inner-group flex check-boxes-container`}>
                                <Checkboxes contents={status} check={setFilterStatus} groupName={"status"}/>
                                </div>
                            </div>
                            </>
                        ) : <></>
                    }

                    
                    {/* currently active filters */}
                    {
                        getChecked().length >= 1 ?
                        (
                            <div className="filtered">
                                <p> Filtered </p>
                                <div className="flex">
                                    {
                                        getChecked().map((tagName, index) => (<div key={index} className={`filter-item flex v-center ${dataObject('config')['status'].colors[tagName.name]}`} data-tag={tagName.name.toLowerCase()}> {tagName.name} <TimesIcon func={(el) => dispatch(setFilterStatus({name: tagName.name , update: 'status'}))}/></div>))
                                    }
                                </div>
                            </div>
                        )
                        : ""
                    }
                    
                    {/* search results */}
                    <div className={`search-dropdown-inner flex flex-column search-results`}>
                        {
                            searchResults.length >= 1 ?
                            searchResults.map(item => (item))
                            : input == "" ? "" : (<div className="no-results"> Nothing found for <span className="search-input">{input}</span></div>)
                        }
                    </div>
                </div>
        </div>
    )
}

export default Search;