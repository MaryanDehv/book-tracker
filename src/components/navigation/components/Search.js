import { CheckIcon, CloseIcon, FilterIcon, SearchIcon, TimesIcon } from "../../../images/icons/customIcons";
import BookCard from "../../BookCard";
import BookProgress from "../../BookProgress";
import { useState} from "react";
// import bookData from "../../../data/data";
// import { sortData } from "../../../functions/helper";

const Search = ({section}) => {
    const [searchDropdown , setSearchDropdown] = useState(false)
    const [filterDropdown , setFilterDropdown] = useState(false);
    const [searchInput , setSearchInput] = useState("")
    const [filterOpt , setFilterOpt] = useState([
        {
            name: "Completed",
            color: "green",
            checked: false,
        },{
            name: "Ongoing",
            color: "red",
            checked: false,
        },{
            name: "Reading Trends",
            color: "orange",
            checked: false,
        }
    ])


    const [isFiltered , setIsFiltered] = useState([]);

    function removeFilters(el , index){
        setIsFiltered(isFiltered.filter((item , isFilteredIndex) => index != isFilteredIndex));
        uncheck(el)
    }

    function handleChange(e){
        // todo - set up searching
        if(e.target.value){
            setSearchInput(e.target.value)
            setSearchDropdown(true)
        } else {
            resetSearch()
        }
    }


    // filter

        // uncheck currently selected checkboxes
        function uncheck(tag){
            let currentFilterOptList = filterOpt;
            const getIndex = currentFilterOptList.findIndex(item => item.name.toLowerCase() == tag.name.toLowerCase());
            currentFilterOptList[getIndex].checked = false;
            setFilterOpt([...currentFilterOptList]);
        }

        // when checkboxes are checked -> update filter tags
        function check(index , tag){
            const currentFilterOptList = filterOpt;
            const checkState = !currentFilterOptList[index].checked;

            if(checkState){
                if(!isFiltered.find(item => item.name == filterOpt[index].name)) setIsFiltered([...isFiltered , filterOpt[index]]);
            } else {
                setIsFiltered([...isFiltered.filter(item => item.name != filterOpt[index].name)]);
            }

            currentFilterOptList[index].checked = checkState;
            setFilterOpt([...currentFilterOptList])
        }


    // searchbox contents

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
        <div className={`search ${searchDropdown ? 'search-dropdown-panel' : ''}`}>
                    <div className={`search-container flex v-center justify-sb`}>
                        <div className="flex v-center">
                            <div className="icon"><SearchIcon func={() => setSearchDropdown(!searchDropdown)} /></div>
                            <input type="text" placeholder="Search your library..." value={searchInput}  onChange={handleChange} />
                        </div>

                        <div className="flex v-center">
                            <div className={`filter icon ${filterDropdown ? 'filter-active' : ''}`}><FilterIcon func={toggleFilter} /></div>
                            <div className={`close icon ${!searchDropdown ? 'hidden' : ''}`}><CloseIcon func={resetSearch}/></div>
                        </div>
                    </div>
                    <div className={`search-dropdown ${filterDropdown ? 'filter-panel' : ''}`}>
                        {
                            isFiltered.length >= 1 ? 
                            (
                                <div className="filtered">
                                    <p> Filtered </p>
                                    <div className="flex">
                                        {
                                            isFiltered.map((tag , index) => (<div key={index} className={`filter-item flex v-center ${tag.color}`} data-tag={tag.name.toLowerCase()}> {tag.name} <TimesIcon func={() => removeFilters(tag , index)}/></div>))
                                        }
                                    </div>
                                </div>
                            ) :
                            ""
                        }
                        <div className={`search-dropdown-inner search-results`}>
                            <div className={`search-dropdown-inner-group`}>
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
                            <div className={`search-dropdown-inner-group grayed`}>
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
                        <div className={`search-dropdown-inner filter-selection-group`}>
                            <div className={`search-dropdown-inner-group flex justify-sb`}>
                                {
                                    filterOpt.map((tag , index) => (
                                        <div key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , tag)} data-check={tag.name.toLowerCase()}>
                                            <div className={`${tag.color}`}></div>
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