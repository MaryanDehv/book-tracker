import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Modal from './components/Modal/Modal';
import BookCard from './components/cards/BookCard';
import HabitTracker from './components/cards/HabitTracker';
import BookProgress from './components/cards/BookProgress';
import BookList from './components/cards/BookList';
import BookGraph from './components/charts/BarGraph';
import {getBookCategories} from './data/data';
import React, {useState} from "react";
import { Outlet } from 'react-router-dom';
import { bookStatus} from './functions/_filtering';
import { AnalyticsIcon , CheckIcon , ListIcon , ClockIcon} from './images/icons/customIcons';
import { dataObject } from './functions/_helper';
import { useSelector } from 'react-redux';

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
  // filtering
  const [authors , setAuthors] = useState(dataObject('authors'))
  const [status , setStatus] = useState(dataObject('status')); // contains all possible filter options and their checked state
  const [bookCategories , setBookCategories] = useState(getBookCategories());
  const [genres , setGenres] = useState(dataObject('genre'))
  const [starFIlter , setStarFilter] = useState(0)
  const [progressBar , setProgressBar] = useState(0);

  // remove these
  const [filteredBooks, setFilteredBooks] = useState(dataObject('books'))
  const [currentFilterOptions , setCurrentFilterOptions] = useState([])

  const {modal} = useSelector(state => state.modal)


  // data passed down to other components via context
  const contextData = {
    authors: {variable: authors , set: setAuthors},
    status: {variable: status , set: setStatus},
    bookCategories: {variable: bookCategories, set: setBookCategories},
    genres: {variable: genres, set: setGenres},
    ratings: {variable: starFIlter , set: setStarFilter},
    progressBar: {variable: progressBar , set: setProgressBar},
    filteredBooks: {variable: filteredBooks, set: setFilteredBooks},
    currentFilterOptions: {variable: currentFilterOptions, set: setCurrentFilterOptions}
  }

  const {mobileNav , mobileSearch , themeMode} = useSelector(state => state.navigation)

  return (
     <DataContext.Provider value={contextData}>
        <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${themeMode}-mode`}>
          <SideBar />
          <div className="main padding-l-r-2">
            {modal ? <Modal /> : ""}
            <Outlet />
          </div>
          <TopBar />
        </div>
      </DataContext.Provider>
  );
}

export default App;