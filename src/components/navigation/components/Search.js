import { CheckIcon, CheckMark, CloseIcon, FilterIcon, SearchIcon, TimesIcon} from "../../../images/icons/customIcons";
import BookCard from "../../BookCard";
import BookProgress from "../../BookProgress";
import { useState} from "react";
import { search } from "../../../functions/helper";
import bookData from "../../../data/data";
import { sortData } from "../../../functions/helper";


const initialFilterState = [
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
]

const Search = ({section}) => {

    // review variable names
    const [searchDropdown , setSearchDropdown] = useState(false)
    const [searchInput , setSearchInput] = useState("")
    const [searchedData , setSearchedData] = useState(bookData.books);
    const [filterDropdown , setFilterDropdown] = useState(false);
    const [filterOpt , setFilterOpt] = useState(initialFilterState);
    const [isFiltered , setIsFiltered] = useState([]);


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
        isFiltered: {
            variable: isFiltered ,
            set: setIsFiltered
        }
    }

    const {removeFilters , check , toggleFilter , resetSearch} = search(states);

    function handleChange(e){
        // todo - set up searching
        if(e.target.value){
            setSearchInput(e.target.value)
            setSearchDropdown(true)
            setSearchedData(filterData(searchInput))
        } else {
            resetSearch()
        }
    }


    function filterData(searchphrase){
        return bookData.books.filter(book => book.title.toLowerCase().includes(searchphrase.toLowerCase()))
    }

    function returnSearched(status){
        let data = []

        searchedData.forEach(item => {
            if(item.status == status){
                data.push(item)
            }
        })
        console.log(data)

        return data;
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
                    {
                        searchedData ?
                        (
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
                                {
                                    returnSearched("completed") ? (
                                            <div className={`search-dropdown-inner-group`}>
                                                <div className={`section-title flex v-center green`}>
                                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Completed </h3>
                                                </div>
                                                <div className="section-list">
                                                    {
                                                        returnSearched("ongoing").map(book => (
                                                            <BookCard
                                                                content={{
                                                                    image:  book.image,
                                                                    title: book.title,
                                                                    description: book.description,
                                                                    author: book.author
                                                                }}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                    ) :
                                    ""
                                }

                                {
                                    returnSearched("ongoining") ?(
                                        <div className={`search-dropdown-inner-group grayed`}>
                                            <div className={`section-title flex v-center red`}>
                                                <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Ongoing </h3>
                                            </div>
                                            <div className="section-list">
                                                {
                                                    returnSearched("ongoing").map(book => (
                                                        <BookProgress 
                                                            content={{
                                                                image: book.image,
                                                                title: book.title
                                                            }}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) :
                                    ""
                                }
                                </div>



                                <div className={`search-dropdown-inner filter-selection-group`}>
                                    <div className={`search-dropdown-inner-group flex justify-sb`}>
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
                        )
                        :""
                    }
                </div>
    )
}

export default Search;
