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
import { useState , useRef, useEffect } from "react";
import { sortData } from './functions/_helper';

// placeholder content until database is set up
import bookData from "./data/data";


// ability to restructure page layouts

function App() {

  const gridConfig = [
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
  ]

  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);
  const [startRestructure , setStartRestructure] = useState(true);
  const [gridLayout , setGridLayout] = useState(gridConfig);
  const [selection , setSelection] = useState()

  useEffect(() => {
    console.log(selection)
  } , [selection]) 

  let from;
  let to;

  function draggedItem(index){
    from = index;
  }

  function draggedOver(index, type){
    to = index;
  }

  function draggedStopped(index){
   rearrage(from , to)
  }

  function rearrage(a , b){
    let arr = []

    for(let i =  0 ; i < gridLayout.length ; i++){
      if(i != a && i != b){
        arr.push(gridLayout[i])
      } else {
        arr.push(false)
      }
    }

    arr[a] = gridLayout[b];
    arr[b] = gridLayout[a];
  
   setGridLayout([...arr])

   from = ""
   to = ""
  }


  function touch(el , i){
    if(!from){
      from = {element: el , index: i}
    }
    
    if(from && (el != from.element) && (i != from.index)){
      to = {index: i};
    }
    
    if(from && to) rearrage(from.index , to.index)
  }

  return (
    <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
      <SideBar themeToggle={{theme: theme , func: setTheme}} toggleSearch={mobileSearch}/>
      <div className="main padding-l-r-2">
        { startRestructure 
          ? (<div className="restructure-backdrop">

            <div className="restructure-backdrop-inner">
              {gridLayout.map((_ , index) =>
                (
                  <div
                    key={index} 
                    draggable="true"
                    onTouchStart={(e) => touch(e , index)}
                    onDragStart={(e) => draggedItem(index)} 
                    onDragOver={(e) => draggedOver(index)} 
                    onDragEnd={draggedStopped}
                    className={`restructure-block-color ${_.groupTitle.color}`}
                  >
                    <div className="flex flex-column v-center">
                      <_.groupTitle.component/>
                      <div>{_.groupTitle.name}</div>
                    </div>
                  </div>
                )
              )}
            </div>

          </div>)
          : ""
        }
        <Grid 
          content={gridLayout}
        />
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} toggleStructureBoard={{data: startRestructure , func: setStartRestructure}} />
    </div>
  );
}

export default App;