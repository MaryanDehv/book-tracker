import { useEffect, useState } from "react";

const State = ({mobileDropdown , initialFilterState}) => {
     // This component is being used in the sidebar component for mobile -> evaluates whether to enable dropdown functionality
     const [searchDropdown , setSearchDropdown] = useState(mobileDropdown ? true : false)
     // these states are being passed to external file functions/_search.js
     const [searchInput , setSearchInput] = useState("") // contains user search input
     const [searchedData , setSearchedData] = useState(""); // contains books dependant on filter and search input
     const [filterDropdown , setFilterDropdown] = useState(false); // controls whether to show filter checkbox in dropdown
     const [filterOpt , setFilterOpt] = useState(initialFilterState); // contains all possible filter options and their checked state

     return {
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
        searchedData: {
            variable: searchedData,
            set: setSearchedData
        }
    }

}

export default State;