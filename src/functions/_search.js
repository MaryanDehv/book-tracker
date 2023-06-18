import { filter } from "./_filtering";

// location -> search.js
export function search(state , _){ 
    const {BookCard , BookList , BookProgress, CheckIcon , ListIcon , ClockIcon} = _;
   
    function toggleFilterPanel(el){
      const {filterDropdown , searchDropdown} = state;
      filterDropdown.set(!filterDropdown.variable)
      if(!searchDropdown.variable) searchDropdown.set(true)
    }
  
    function resetSearch(mobileSearch){
      const {searchDropdown ,filterDropdown , searchInput} = state;
      searchDropdown.set(false)
      filterDropdown.set(false)
      searchInput.set("")
      if(mobileSearch) mobileSearch(false)
    }
  
    function updateSearch(e){
      const {searchDropdown , searchInput} = state;
      searchInput.set(e.target.value)
      searchDropdown.set(true)
    }

    function getBooks(searchPhrase , data){
      return constructSearchResults(filter().filterBooksByName(searchPhrase , data))
    }
  
    function constructSearchResults(searchData){
        const {filterOpt} = state;
        const filterData = [];
        const selectedFilterOptions = filterOpt.variable.filter(tag => tag.checked == true);
        let sortedSearchData = {};
        selectedFilterOptions.forEach(({name}) => filterData.push(name.toLowerCase()))
  
        const jsx = ({component: Component , status}) => (
        <div className={`search-dropdown-inner-group ${status == "ongoing" ? "grayed" : ""}`}>
            <div className={`section-title flex v-center ${status == "completed" ? 'green' : status == "list" ? "purple" : "orange" }`}>
                <div className="section-title-icon flex v-h-center"> {status == "completed" ? <CheckIcon /> : status == "ongoing" ? <ClockIcon /> : <ListIcon />} </div> <h3> {status} </h3>
            </div>
            <div className="section-list">
                {
                    searchData.map((result , index)  => result.status == status ? <Component key={index} content={result} /> : "")
                }
            </div>
        </div>)
  
        const setSortedSearchData = (status , arrItem) => {
            sortedSearchData[status] = jsx({
                component: getComponent(status),
                status: arrItem.status,
            }); 
        }
  
  
        searchData.forEach(book => {
            const {status} = book;
            if(!sortedSearchData[status]){
                if(filterData.length >= 1){
                    filterData.forEach(filterTag => {
                        if(status == filterTag) setSortedSearchData(status , book)
                    })
                } else {
                    setSortedSearchData(status , book)
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
      resetSearch,
      updateSearch,
      getBooks
    }
  }