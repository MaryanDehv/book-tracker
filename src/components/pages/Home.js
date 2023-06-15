import bookData from "../../data/data"
import Grid from "../../utils/Grid"
import BookCard from "../cards/BookCard"
import BookList from "../cards/BookList"
import BookProgress from "../cards/BookProgress"
import BookGraph from "../cards/BookGraph"
import HabitTracker from "../cards/HabitTracker"
import {AnalyticsIcon, CheckIcon, ClockIcon, ListIcon} from '../../images/icons/customIcons'
import { useState , useEffect } from "react";
import { sortData } from "../../functions/_helper"
import { useOutletContext } from "react-router"

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

const Home = () => {
    const [gridLayout , setGridLayout] = useState(gridConfig);
    const [selectedWidth , setSelectedWidth] = useState()
    const [selection , setSelection] = useState([])
    const [startRestructure , setStartRestructure] = useOutletContext()

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

    return(
        <>
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

        <Grid content={gridLayout} setWidth={setSelectedWidth} />
      </>
    )
}

export default Home