
// data sorting
export function sortData(statusType , source){
  // use location -> app.js
  const data = [];
  statusType.forEach(index => {
    data.push(source.books[index])
  })
  return data;
}


// theme
export function themeMode(theme , cb){
  // use location -> navigation.js
    cb.func(theme)
}


// search
export function search(state){  
  // used location  -> search.js
  function getState(keyword){
    const {variable , set} = state[keyword];
    return {
      variable,
      set
    }
  }

  function getMultipleStates(array){
    let data = {};
    array.forEach(item => {
      data[item] = getState(item)
    })
    return data;
  }

  function removeFilter(el , index){
    // removed filter then unchecks corresponding checkbox
    getState("isFiltered").set(getState("isFiltered").variable.filter((_ , isFilteredIndex) => index != isFilteredIndex));
    uncheck(el)
  }

  function check(index){
    // adds check mark to filter checkboxes
    const {filterOpt , isFiltered} = getMultipleStates(["filterOpt" , "isFiltered"])
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
    // remoed checkmark from specific checkbox
    const stateVariable = getState("filterOpt").variable;
    const stateAction = getState("filterOpt").set;
    const getIndex = stateVariable.findIndex(item => item.name.toLowerCase() == tag.name.toLowerCase());
    stateVariable[getIndex].checked = false;
    stateAction([...stateVariable]);
  }

  function toggleFilterPanel(el){
    // toggle whether the filter panel in the search panel shows or not
    const {filterDropdown , searchDropdown} = getMultipleStates(["filterDropdown" , "searchDropdown"])
    filterDropdown.set(!filterDropdown.variable)
    if(!searchDropdown.variable) searchDropdown.set(true)
  }

  function resetSearch(){
    const {searchDropdown ,filterDropdown , searchInput} = getMultipleStates(["searchDropdown" , "filterDropdown" , "searchInput"])
    searchDropdown.set(false)
    filterDropdown.set(false)
    searchInput.set("")
  }

  function updateSearch(e){
    const {searchDropdown , searchInput} = getMultipleStates(["searchInput" , "searchDropdown" , "searchedData"])
    if(e.target.value != ""){
        searchInput.set(e.target.value)
        searchDropdown.set(true)
    } else {
        resetSearch()
    }
  }



  return{
    removeFilter,
    check,
    toggleFilterPanel,
    resetSearch,
    updateSearch
  }
}