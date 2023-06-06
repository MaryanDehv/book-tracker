import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Grid from './components/utils/Grid';
import BookCard from './components/BookCard';
import BookProgress from './components/BookProgress';
import BookList from './components/BookList';
import BookGraph from './components/BookGraph';
import {AnalyticsIcon, CheckIcon, ClockIcon, ListIcon} from './images/icons/customIcons';
import { useState } from "react";
import { sortData } from './functions/helper';

// placeholder content until database is set up
import bookData from "./data/data";

function App() {

  const [theme , setTheme] = useState('light')
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
              content:[{
                title: "testing",
                description: "lorem something somwthing blah blah"
              }]
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
            }
          ]}
        />
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} />
    </div>
  );
}

export default App;
