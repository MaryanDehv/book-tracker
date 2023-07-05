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
import { AnalyticsIcon , CheckIcon , ListIcon , ClockIcon, TimesIcon } from './images/icons/customIcons';
import { restructure } from './functions/_restructure';
import LineChart from './components/LineChart';

export const DataContext = React.createContext()
const {sortBooksBasedOnStatus , getData} = filter("" , "" , bookData)

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
  const [progressBar , setProgressBar] = useState(0);
  const [starFIlter , setStarFilter] = useState(0)
  const [modalType , setModalType] = useState()
  const [authors , setAuthors] = useState(bookData.authors)
  const [status , setStatus] = useState(bookData.status); // contains all possible filter options and their checked state
  const [bookCategories , setBookCategories] = useState(getData(bookData.books[0],['title' , 'image' , 'color' , 'description']));
  const [genres , setGenres] = useState(getData(bookData.genre))
  const [changeWidth , setChangeWidth] = useState()
  const [filteredBooks, setFilteredBooks] = useState(bookData.books)


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
    mobileNav: {variable: mobileNav , set: setMobileNav},
    gridLayout: {variable: gridLayout , set: setGridLayout},
    selectedWidth: {variable: selectedWidth , set: setSelectedWidth},
    modalType: {set: setModalType},
    status: {variable: status , set: setStatus},
    toggleSearch:{variable: mobileSearch , set: setMobileSearch},
    themeToggle: {variable: theme , set: setTheme},
    ratings: {variable: starFIlter , set: setStarFilter},
    authors: {variable: authors , set: setAuthors},
    selection: {variable: selection , set: setSelection},
    progressBar: {variable: progressBar , set: setProgressBar},
    bookCategories: {variable: bookCategories, set: setBookCategories},
    genres: {variable: genres, set: setGenres},
    filteredBooks: {variable: filteredBooks, set: setFilteredBooks}
  }

  const {rearrage , touch} = restructure(contextData)


  const gridOptions = [
      3, 2, 1
  ]

  function getWidth(width , parentIndex){
    setSelectedWidth({width:width, parent: parentIndex})
  }

  // apply the width of the block you're moving to

  
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