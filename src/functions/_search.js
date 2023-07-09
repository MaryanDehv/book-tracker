import {getBooksByName} from "./_filtering";
import {dataObject} from "./_helper";

// location -> search.js
export function search(
    {
        searchDropdown, 
        searchInput,  
        filterDropdown,
        status
    } , 
    components
    ){ 
    const {BookCard, BookList, BookProgress, SectionTitle, CheckIcon, ListIcon, ClockIcon} = components;
   
    function toggleFilterPanel(el){
      filterDropdown[1](!filterDropdown[0])
      if(!searchDropdown[0]) searchDropdown[1](true)
    }
  
    function removeSearch(mobileSearch){
      searchDropdown[1](false)
      filterDropdown[1](false)
      searchInput[1]("")
      if(mobileSearch) mobileSearch(false)
    }
  
    function updateSearchInput(e){
      searchInput[1](e.target.value)
      searchDropdown[1](true)
    }

    function getBooks(searchPhrase){
      return constructSearchResults(getBooksByName(searchPhrase))
    }
  
    function constructSearchResults(searchData){
        const filterData = [];
        const selectedFilterOptions = status.variable.filter(tag => tag.checked == true);
        let sortedSearchData = {};
        selectedFilterOptions.forEach(({name}) => filterData.push(name.toLowerCase()))
  
        const jsx = ({component: Component , status}) => (
        <div className={`search-dropdown-inner-group ${status == "ongoing" ? "grayed" : ""}`}>
            <SectionTitle title={status} icon={status == "ongoing" ? ClockIcon : status == "complete" ? CheckIcon : ListIcon} searchDropdown={true}/>
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
                        if(status == filterTag) setSortedSearchData(book)
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

        return convertedToArray;
    }
  
    function getComponent(status){
        if(status == 'completed') return BookCard
        if(status == 'ongoing') return BookProgress
        if(status == 'list') return BookList
    }
  
    return{
      toggleFilterPanel,
      removeSearch,
      updateSearchInput,
      getBooks
    }
  }