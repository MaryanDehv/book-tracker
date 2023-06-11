// location -> search.js
// todo -> refactor at some point
export function search(state , _){ 
    const {BookCard , BookList , BookProgress, CheckIcon , ListIcon , ClockIcon , bookData} = _;
  
    function getState(array){
      let data = {};
      array.forEach(item => {
        data[item] = state[item]
      })
      return data;
    }
  
    function removeFilter(el , index){
      const {isFiltered} = getState(["isFiltered"])
      isFiltered.set(isFiltered.variable.filter((_ , isFilteredIndex) => index != isFilteredIndex));
      uncheck(el)
    }
  
    function check(index){
      const {filterOpt , isFiltered} = getState(["filterOpt" , "isFiltered"])
      const checkState = !filterOpt.variable[index].checked;
      const currentFilterOptList = filterOpt.variable;
  
      if(checkState){
          if(!isFiltered.variable.find(item => item.name == filterOpt.variable[index].name)) isFiltered.set([...isFiltered.variable , filterOpt.variable[index]]);
      } else {
          isFiltered.set([...isFiltered.variable.filter(item => item.name != filterOpt.variable[index].name)]);
      }
  
      currentFilterOptList[index].checked = checkState;
      filterOpt.set([...currentFilterOptList])
    }
  
    function uncheck(tag){
      const {filterOpt} = getState(["filterOpt"])
      const getIndex = filterOpt.variable.findIndex(item => item.name.toLowerCase() == tag.name.toLowerCase());
      filterOpt.variable[getIndex].checked = false;
      filterOpt.set([...filterOpt.variable]);
    }
  
    function toggleFilterPanel(el){
      const {filterDropdown , searchDropdown} = getState(["filterDropdown" , "searchDropdown"])
      filterDropdown.set(!filterDropdown.variable)
      if(!searchDropdown.variable) searchDropdown.set(true)
    }
  
    function resetSearch(){
      const {searchDropdown ,filterDropdown , searchInput} = getState(["searchDropdown" , "filterDropdown" , "searchInput"])
      searchDropdown.set(false)
      filterDropdown.set(false)
      searchInput.set("")
    }
  
    function updateSearch(e){
      const {searchDropdown , searchInput} = getState(["searchInput" , "searchDropdown" , "searchedData"])
      if(e.target.value != ""){
          searchInput.set(e.target.value)
          searchDropdown.set(true)
      } else {
          resetSearch()
      }
    }
  
    function filterBooks(searchPhrase){
      const books = bookData.books;
      let data = [];
      books.forEach((book) => {
        const {title} = book;
        if(title.toLowerCase().includes(searchPhrase)){
            data.push(book);
        }
      })
  
      return constructSearchResults(data)
    }
  
    function constructSearchResults(searchData){
        const {filterOpt} = getState(["filterOpt"])
        const filterData = [];
        const selectedFilterOptions = filterOpt.variable.filter(tag => tag.checked == true);
        let sortedSearchData = {};
        selectedFilterOptions.forEach(({name}) => filterData.push(name.toLowerCase()))
  
        const jsx = ({component: Component , status}) => (
        <div className={`search-dropdown-inner-group ${status == "ongoing" ? "grayed" : ""}`}>
            <div className={`section-title flex v-center red`}>
                <div className="section-title-icon flex v-h-center"> {status == "completed" ? <CheckIcon /> : status == "ongoing" ? <ClockIcon /> : <ListIcon />} </div> <h3> {status} </h3>
            </div>
            <div className="section-list">
                {
                    searchData.map(result => result.status == status ? <Component content={result} /> : "")
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
      removeFilter,
      check,
      toggleFilterPanel,
      resetSearch,
      updateSearch,
      filterBooks
    }
  }