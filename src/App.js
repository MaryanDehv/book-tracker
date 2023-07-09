import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Modal from './components/Modal/Modal';
import BookCard from './components/cards/BookCard';
import HabitTracker from './components/cards/HabitTracker';
import BookProgress from './components/cards/BookProgress';
import BookList from './components/cards/BookList';
import BookGraph from './components/charts/BarGraph';
import { getBookCategories, getGenreCategories } from './data/data';
import React, { useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';
import { bookStatus} from './functions/_filtering';
import { AnalyticsIcon , CheckIcon , ListIcon , ClockIcon, TimesIcon } from './images/icons/customIcons';
import { restructure } from './functions/_restructure'
import { dataObject } from './functions/_helper';

export const DataContext = React.createContext()

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
    content:bookStatus("ongoing")
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
    content:bookStatus("list")
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
    content: bookStatus("completed")
  }
]


function App() {


  // state
  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);


  // modal states
  const [modalType , setModalType] = useState()

  // dashboard layout
  const [startRestructure , setStartRestructure] = useState(false);
  const [gridLayout , setGridLayout] = useState(gridConfig);
  const [selectedWidth , setSelectedWidth] = useState()
  const [selection , setSelection] = useState([])
  const [changeWidth , setChangeWidth] = useState()

  // filtering
  const [authors , setAuthors] = useState(dataObject('authors'))
  const [status , setStatus] = useState(dataObject('status')); // contains all possible filter options and their checked state
  const [bookCategories , setBookCategories] = useState(getBookCategories());
  const [genres , setGenres] = useState(dataObject('genre'))
  const [starFIlter , setStarFilter] = useState(0)
  const [progressBar , setProgressBar] = useState(0);

  console.log(genres)

  // remove these
  const [filteredBooks, setFilteredBooks] = useState(dataObject('books'))


  useEffect(() => {
      if(selection.length == 2) rearrage({from:selection[0] , to:selection[1]})
  } , [selection]) 
  
  useEffect(() => {
    if(selectedWidth){
      gridLayout[selectedWidth.parent].blockWidth = selectedWidth.width;
      setGridLayout([...gridLayout])
    }
  } , [selectedWidth])


  // data passed down to other components via context
  const contextData = {
    mobileNav: {variable: mobileNav , set: setMobileNav},
    modalType: {variable:modalType , set: setModalType},
    toggleSearch:{variable: mobileSearch , set: setMobileSearch},
    themeToggle: {variable: theme , set: setTheme},

    restructureBoard: {variable: startRestructure , set: setStartRestructure},
    gridLayout: {variable: gridLayout , set: setGridLayout},
    selectedWidth: {variable: selectedWidth , set: setSelectedWidth},
    selection: {variable: selection , set: setSelection},

    authors: {variable: authors , set: setAuthors},
    status: {variable: status , set: setStatus},
    bookCategories: {variable: bookCategories, set: setBookCategories},
    genres: {variable: genres, set: setGenres},
    ratings: {variable: starFIlter , set: setStarFilter},
    progressBar: {variable: progressBar , set: setProgressBar},
    filteredBooks: {variable: filteredBooks, set: setFilteredBooks}
  }

  const {rearrage , touch} = restructure(contextData)


  const gridOptions = [
      3, 2, 1
  ]

  function getWidth(width , parentIndex){
    setSelectedWidth({width:width, parent: parentIndex})
  }
  
  return (
     <DataContext.Provider value={contextData}>
        <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
          <SideBar />
          <div className="main padding-l-r-2">
            {modalType ? <Modal /> : ""}
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
                          style={{gridColumn: _.blockWidth ? `auto / span ${_.blockWidth}` : "auto"}}
                          className={`${_.size ? _.size : ""} restructure-block-color flex flex-column ${_.groupTitle.color} ${selection.length > 0 ? index == selection[0] ? "from-selected" : index == selection[1] ? "to-selected" : "move-here": ""}`}
                        >
                          {
                            changeWidth == index ?
                            <div className="restructure-board-widths">
                              <TimesIcon func={() => setChangeWidth()} />
                              <div className="restructure-board-widths-inner">
                                {
                                  gridOptions.map(block => (<div className={_.blockWidth == block ? "current-width" : ""} data-clickable="true" data-width={block} onClick={() => getWidth(block , index)}></div>))
                                }
                              </div>
                            </div> :
                            ""
                          }
                          <div className="flex flex-column v-center restructure-backdrop-inner-content">
                            <_.groupTitle.component/>
                            <div>{_.groupTitle.name}</div>
                          </div>
                          <div className="flex uppercase restructure-options">
                            <div className="flex v-h-center" data-clickable="true" data-options="order" onClick={(el) => {touch(el, index); setChangeWidth()}}></div>
                            <div className="flex v-h-center" data-clickable="true" data-options="width" onClick={() => setChangeWidth(index)}></div>
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