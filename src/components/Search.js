import { CheckIcon, CloseIcon, FilterIcon, SearchIcon, TimesIcon } from "../images/icons/customIcons";
import BookCard from "./BookCard";
import BookProgress from "./BookProgress";
import { useState } from "react";

const Search = ({section}) => {
    const [searchDropdown , setSearchDropdown] = useState(true)
    const [filterDropdown , setFilterDropdown] = useState(true);
    const [searchInput , setSearchInput] = useState("")

    function removeFilters(el){
        // functionality - should remove and reset search based on filter removed
        el.currentTarget.parentNode.remove()
    }

    function handleChange(e){
        if(e.target.value){
            setSearchInput(e.target.value)
            setSearchDropdown(true)
        } else {
            resetSearch()
        }
    }

    function toggleFilter(el){
        setFilterDropdown(!filterDropdown)
        if(!searchDropdown) setSearchDropdown(true)
    }

    function resetSearch(){
        setSearchDropdown(false)
        setFilterDropdown(false)
        setSearchInput("")
    }

    return(
        <div className={`${section}-search ${searchDropdown ? 'search-dropdown-panel' : ''}`}>
                    <div className={`${section}-search-container flex v-center justify-sb`}>
                        <div className="flex v-center">
                            <div className="search icon"><SearchIcon func={() => setSearchDropdown(!searchDropdown)} /></div>
                            <input className="search" type="text" placeholder="Search your library..." value={searchInput}  onChange={handleChange} />
                            <div className="filtered flex">
                                <div className="filter-item flex v-center green"> Com <TimesIcon func={removeFilters}/></div>
                                <div className="filter-item flex v-center red"> Ong <TimesIcon func={removeFilters}/></div>
                            </div>
                        </div>

                        <div className="flex v-center">
                            <div className={`filter icon ${filterDropdown ? 'filter-active' : ''}`}><FilterIcon func={toggleFilter} /></div>
                            <div className={`close icon ${!searchDropdown ? 'hidden' : ''}`}><CloseIcon func={resetSearch}/></div>
                        </div>
                    </div>
                    <div className={`${section}-search-dropdown ${filterDropdown ? 'filter-panel' : ''}`}>
                        <div className={`${section}-search-dropdown-inner search-results`}>
                            <div className={`${section}-search-dropdown-inner-group`}>
                                <div className={`section-title flex v-center green`}>
                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Completed </h3>
                                </div>
                                <div className="section-list">
                                    <BookCard
                                        content={{
                                            img: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                                            title: "Whispers of the Forgotten",
                                            description: "Forgotten secrets revealed in town.",
                                            author: "Jonathan Haidt"
                                        }}
                                    />
                                    <BookCard 
                                        content={{
                                            img: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                                            title: "The Enigmatic Key",
                                            description: "Global chase uncovers key's power.",
                                            author: "Jonathan Haidt"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${section}-search-dropdown-inner-group grayed`}>
                                <div className={`section-title flex v-center red`}>
                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Ongoing </h3>
                                </div>
                                <div className="section-list">
                                    <BookProgress 
                                        content={{
                                            img:"https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                                            title: "the silent observer"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${section}-search-dropdown-inner filter-selection-group`}>
                            <div className={`${section}-search-dropdown-inner-group flex justify-sb`}>
                                <div className="filter-check flex v-center">
                                    <div className="green"></div>
                                    <p> Completed </p>
                                </div>
                                <div className="filter-check flex v-center">
                                    <div className="red"></div>
                                    <p> ongoing </p>
                                </div>
                                <div className="filter-check flex v-center">
                                    <div className="orange"></div>
                                    <p> reading trends </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Search;