import { createSlice } from "@reduxjs/toolkit";
import HabitTracker from "../../components/cards/HabitTracker";
import BookProgress from "../../components/cards/BookProgress";
import BookList from "../../components/cards/BookList";
import BookCard from "../../components/cards/BookCard";
import BookGraph from "../../components/charts/BarGraph";
import { bookStatus } from "../../functions/_filtering";
import { ListIcon , ClockIcon , AnalyticsIcon , CheckIcon } from "../../images/icons/customIcons";

const initialBoardLayout = [
    {
      blockWidth:1,
      component: BookProgress,
      groupTitle:{
        component: ClockIcon,
        color: 'red',
        name: 'ongoing'
      },
      type:"ongoing books",
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
      type:"Reading Graph",
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
      type:"to be read",
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
      type:"completed books",
      class:"book-card-container",
      content: bookStatus("completed")
    }
  ]

export const dashboardSlice = createSlice({
    name: "dashboard" , 
    initialState: {
      restructureBoard: false,
      boardLayout: initialBoardLayout,
      currentSelected: [],
      boardOptions: ["ongoing books" , "completed books" , "to be read" , "reading graph"],
      addingBoard: false
    },
    reducers: {
        rearrange: (state , action) => {
          const {to, from} = action.payload;
          let arr = []

          for(let i =  0 ; i < state.boardLayout.length ; i++){
            if(i != from && i != to){
                arr.push(state.boardLayout[i])
            } else {
                arr.push(false)
            }
          }
  
          arr[from] = state.boardLayout[to];
          arr[to] = state.boardLayout[from];

          state.boardLayout = arr;
          state.currentSelected = []
        },
        touch: (state , action) => {
          const {index} = action.payload
          if(state.currentSelected.length == 0){
              state.currentSelected = [index]
          } else if(state.currentSelected.length < 2 && state.currentSelected.length > 0){
              state.currentSelected = [...state.currentSelected , index]
          }
        },
        updateGridWidth: (state , action) => {
          const {width , parent} = action.payload;
          state.boardLayout[parent].blockWidth = width
        },
        removeGridItem: (state, action) => {
          state.boardLayout = state.boardLayout.filter((item , index) => action.payload != index)
        },
        toggleAddBoard: (state , action) => {
          if(action.payload == "open") state.addingBoard = true
          if(action.payload == "close") state.addingBoard = false
          // should update the new board
        }
    }
});

// justify why you need toggleAddBoard - later


export const {rearrange , touch , updateGridWidth , removeGridItem , toggleAddBoard} = dashboardSlice.actions

export default dashboardSlice.reducer;
