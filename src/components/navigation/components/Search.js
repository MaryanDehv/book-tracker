import { CheckIcon, CheckMark, CloseIcon, FilterIcon, SearchIcon, TimesIcon , ClockIcon, ListIcon} from "../../../images/icons/customIcons";
import BookCard from "../../BookCard";
import BookProgress from "../../BookProgress";
import BookList from "../../BookList";
import { useEffect, useState} from "react";
import { search } from "../../../functions/helper";
import bookData from "../../../data/data";


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

const Search = () => {
    const [searchDropdown , setSearchDropdown] = useState(false)
    const [searchInput , setSearchInput] = useState("")
    const [searchedData , setSearchedData] = useState("");
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
        },
        searchedData: {
            variable: searchedData,
            set: setSearchedData
        }
    }

    const {removeFilter , check , toggleFilterPanel , resetSearch , updateSearch} = search(states);


    // highlight the parts that are being matched

    useEffect(() => {
        setSearchedData(filterBooks(searchInput.toLowerCase().trim("")))
    } , [searchInput])

    function filterBooks(searchPhrase){
      const books = bookData.books;
      let data = [];
      if(searchPhrase != ""){
        books.forEach((book) => {
            const {title} = book;
            if(title.toLowerCase().includes(searchPhrase)){
                data.push(book);
            }
        })
      }

      return constructSearchResults(data)
    }

    function constructSearchResults(data){
        let obj = {};

        const initProps = () => {
            const jsx = ({component: Component , contents , itemStatus}) => (
            <div className={`search-dropdown-inner-group ${itemStatus == "ongoing" ? "grayed" : ""}`}>
                <div className={`section-title flex v-center red`}>
                    <div className="section-title-icon flex v-h-center"> {itemStatus == "completed" ? <CheckIcon /> : itemStatus == "ongoing" ? <ClockIcon /> : <ListIcon />} </div> <h3> {itemStatus} </h3>
                </div>
                <div className="section-list">
                    {
                        data.map(test => test.status == itemStatus ? <Component content={test} /> : "")
                    }
                </div>
            </div>)

            data.forEach(book => {
                const {status} = book; 
                if(!obj[status]){
                    obj[status] = jsx({
                        component: getComponent(status),
                        itemStatus: book.status,
                    });   
                }
            })
        }

        initProps();
        
        let arr = [];

        for(const key in obj){
            arr.push(obj[key])
        }

        return arr;
    }

    function getComponent(status){
        if(status == 'completed') return BookCard
        if(status == 'ongoing') return BookProgress
        if(status == 'list') return BookList
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
                                        isFiltered.map((tag , index) => (<div key={index} className={`filter-item flex v-center ${tag.color}`} data-tag={tag.name.toLowerCase()}> {tag.name} <TimesIcon func={() => removeFilter(tag , index)}/></div>))
                                    }
                                </div>
                            </div>
                        ) :
                        ""
                    }
                    <div className={`search-dropdown-inner search-results`}>
                        {
                            searchedData.length >= 1 ?
                            searchedData.map(item => (item))
                            : searchInput == "" ? "" : (<div className="no-results"> Nothing found for <span className="search-input">{searchInput}</span></div>)
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
        </div>
    )
}

export default Search;
