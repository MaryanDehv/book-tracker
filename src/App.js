import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Grid from "./utils/Grid"
import BookCard from './components/cards/BookCard';
import BookProgress from './components/cards/BookProgress';
import BookList from './components/cards/BookList';
import BookGraph from './components/cards/BookGraph';
import HabitTracker from './components/cards/HabitTracker';
import {AnalyticsIcon, CheckIcon, ClockIcon, ListIcon} from './images/icons/customIcons';
import { useState } from "react";
import { sortData } from './functions/_helper';

// placeholder content until database is set up
import bookData from "./data/data";


// ability to restructure page layouts

function App() {

  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);

  return (
    <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
      <SideBar themeToggle={{theme: theme , func: setTheme}} toggleSearch={mobileSearch}/>
      <div className="main padding-l-r-2">
        <Grid 
          content={[
            {
              component: BookCard,
              groupTitle:{
                component: CheckIcon,
                color: 'green',
                name: 'completed'
              },
              class:"book-card-container",
              content: sortData(bookData.status.completed , bookData)
            },
            {
              component: BookProgress,
              groupTitle:{
                component: ClockIcon,
                color: 'red',
                name: 'ongoing'
              },
              class:"book-progress-container",
              content:sortData(bookData.status.ongoing , bookData)
            },{
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
              component: BookList,
              groupTitle:{
                component: ListIcon,
                color: 'purple',
                name: 'list'
              },
              class:"book-list-container",
              content:sortData(bookData.status.list , bookData)
            },
            {
              component: HabitTracker,
              groupTitle:{
                component: ListIcon,
                color: "red",
                name: "habit tracker"
              },
              class:"habit-tracker-container",
              content:[{}]
            }
          ]}
        />
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} />
    </div>
  );
}

export default App;
