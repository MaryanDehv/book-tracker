import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Modal from './components/Modal';
import BookCard from './components/cards/BookCard';
import HabitTracker from './components/cards/HabitTracker';
import BookProgress from './components/cards/BookProgress';
import BookList from './components/cards/BookList';
import BookGraph from './components/cards/BookGraph';
import bookData from './data/data';
import AddBook from './components/AddBook';
import React, { useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';
import { filter } from './functions/_filtering';
import { AnalyticsIcon , CheckIcon , ListIcon , ClockIcon } from './images/icons/customIcons';
import { restructure } from './functions/_restructure';

export const DataContext = React.createContext()
const {sortBooksBasedOnStatus , getBookCategories} = filter("" , "" , bookData)

const gridConfig = [
  {
    blockWidth:3,
    component: HabitTracker,
    groupTitle:{
      component: ListIcon,
      color: "red",
      name: "habit tracker"
    },
    class:"habit-tracker-container",
    content:[{}]
  },{
    blockWidth:1,
    component: BookProgress,
    groupTitle:{
      component: ClockIcon,
      color: 'red',
      name: 'ongoing'
    },
    class:"book-progress-container",
    content:sortBooksBasedOnStatus("ongoing" , bookData)
  },{
    blockWidth:2,
    component: BookGraph,
    groupTitle:{
      component: AnalyticsIcon,
      color: 'orange',
      name: 'reading trends'
    },
    class:"book-graph-container",
    content:[{}]
  },
  {
    blockWidth: 1,
    component: BookList,
    groupTitle:{
      component: ListIcon,
      color: 'purple',
      name: 'list'
    },
    class:"book-list-container",
    content:sortBooksBasedOnStatus("list" , bookData)
  },
  {
    blockWidth: 2,
    component: BookCard,
    groupTitle:{
      component: CheckIcon,
      color: 'green',
      name: 'completed'
    },
    class:"book-card-container",
    content: sortBooksBasedOnStatus("completed", bookData)
  }
]


function App() {

  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);
  const [startRestructure , setStartRestructure] = useState(false);
  const [modal , setModal] = useState(false)
  const [gridLayout , setGridLayout] = useState(gridConfig);
  const [selectedWidth , setSelectedWidth] = useState()
  const [selection , setSelection] = useState([])
  const [progressBar , setProgressBar] = useState('0');
  const [starFIlter , setStarFilter] = useState(0)
  const [modalType , setModalType] = useState({component:AddBook})
  const [authors , setAuthors] = useState(bookData.authors)
  const [status , setStatus] = useState(bookData.status); // contains all possible filter options and their checked state
  const [bookCategories , setBookCategories] = useState(getBookCategories());


  useEffect(() => {
      if(selection.length == 2) rearrage({from:selection[0] , to:selection[1]})
  } , [selection]) 
  
  useEffect(() => {
    if(selectedWidth){
      gridLayout[selectedWidth.parent].blockWidth = selectedWidth.width;
      setGridLayout([...gridLayout])
    }
  } , [selectedWidth])

  const contextData = {
    modal:{variable: modal , set: setModal} , 
    restructureBoard: {variable: startRestructure , set: setStartRestructure},
    gridLayout: {variable: gridLayout , set: setGridLayout},
    selectedWidth: {variable: selectedWidth , set: setSelectedWidth},
    modalType: {set: setModalType},
    status: {variable: status , set: setStatus},
    toggleSearch:{variable: mobileSearch , set: setMobileSearch},
    themeToggle: {variable: theme , set: setTheme},
    ratings: {variable: starFIlter , set: setStarFilter},
    toggleNav: {variable: mobileNav , set: setMobileNav},
    authors: {variable: authors , set: setAuthors},
    selection: {variable: selection , set: setSelection},
    progressBar: {variable: progressBar , set: setProgressBar},
    bookCategories: {variable: bookCategories, set: setBookCategories}
  }

    const {rearrage , touch} = restructure(contextData)
  
  return (
     <DataContext.Provider value={contextData}>
        <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
          <SideBar />
          <div className="main padding-l-r-2">
            {modal ? <Modal  modalType={modalType}/> : ""}
            { 
              startRestructure
              ? (<div className="restructure-backdrop">

                <div className="restructure-backdrop-inner">
                  {
                    gridLayout.map((_ , index) =>
                      (
                        <div
                          data-clickable="true"
                          key={index} 
                          onClick={() => touch(_, index)}
                          style={{gridColumn: _.blockWidth ? `auto / span ${_.blockWidth}` : "auto"}}
                          className={`${_.size ? _.size : ""} restructure-block-color ${_.groupTitle.color} ${selection.length > 0 ? index == selection[0] ? "from-selected" : index == selection[1] ? "to-selected" : "move-here": ""}`}
                        >
                          <div className="flex flex-column v-center">
                            <_.groupTitle.component/>
                            <div>{_.groupTitle.name}</div>
                          </div>
                        </div>
                      )
                    )
                  }
                </div>

              </div>)
              : ""
            }
            <Outlet />
          </div>
          <TopBar />
        </div>
      </DataContext.Provider>
  );
}

export default App;