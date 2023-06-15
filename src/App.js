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
import { useState , useEffect } from "react";
import { sortData } from './functions/_helper';

// placeholder content until database is set up
import bookData from "./data/data";


// ability to restructure page layouts

function App() {

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
      content:sortData(bookData.status.ongoing , bookData)
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
      content:sortData(bookData.status.list , bookData)
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
      content: sortData(bookData.status.completed , bookData)
    }
  ]

  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);
  const [startRestructure , setStartRestructure] = useState(false);
  const [gridLayout , setGridLayout] = useState(gridConfig);
  const [selectedWidth , setSelectedWidth] = useState()
  const [selection , setSelection] = useState([])

  useEffect(() => {
    if(selection.length == 2) rearrage({from:selection[0] , to:selection[1]})
  } , [selection]) 

  useEffect(() => {
    if(selectedWidth){
      const grid = gridLayout;
      grid[selectedWidth.parent].blockWidth = selectedWidth.width;
      setGridLayout([...grid])
    }
  } , [selectedWidth])

  function rearrage({from , to}){
    let arr = []

    for(let i =  0 ; i < gridLayout.length ; i++){
      if(i != from && i != to){
        arr.push(gridLayout[i])
      } else {
        arr.push(false)
      }
    }

    arr[from] = gridLayout[to];
    arr[to] = gridLayout[from];
  
   setGridLayout([...arr])
   setTimeout(() => {
    setSelection([])
   } , 200) 
  }

  function touch(el , i){
    if(selection.length == 0){
      setSelection([i])
    } else if(selection.length < 2 && selection.length > 0){
      setSelection([...selection , i]);
    }
  }

  return (
    <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
      <SideBar themeToggle={{theme: theme , func: setTheme}} toggleSearch={setMobileSearch}/>
      <div className="main padding-l-r-2">
        { startRestructure 
          ? (<div className="restructure-backdrop">

            <div className="restructure-backdrop-inner">
              {
                gridLayout.map((_ , index) =>
                  (
                    <div
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
        {
          gridLayout ?
            <Grid 
              content={gridLayout}
              setWidth={setSelectedWidth}
            /> 
          : ""
        }
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} toggleStructureBoard={{data: startRestructure , func: setStartRestructure}} />
    </div>
  );
}

export default App;