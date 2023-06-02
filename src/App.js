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

function App() {

  const [theme , setTheme] = useState('light')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);

  return (
    <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
      <SideBar toggle={{theme: theme , func: setTheme}} toggleSearch={mobileSearch}/>
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
              content:[{
                img: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                title: "Whispers of the Forgotten",
                description: "Forgotten secrets revealed in town."
              },
              {
                img: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                title: "The Enigmatic Key",
                description: "Global chase uncovers key's power."
              }]
            },
            {
              component: BookProgress,
              groupTitle:{
                component: ClockIcon,
                color: 'red',
                name: 'ongoing'
              },
              class:"book-progress-container",
              content:[{
                img:"https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                title: "The Silent Observer"
              },
              {
                img:"https://cdn.pixabay.com/photo/2022/09/05/12/17/geometric-pattern-7434039_960_720.jpg",
                title: "Beneath the Crimson Veil"
              },
              {
                img:"https://cdn.pixabay.com/photo/2016/09/01/13/52/steampunk-1636156_960_720.png",
                title: "The Clockwork Alchemist"
              }]
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
              content:[{
                title: "Echoes of Eternity",
                img:"https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
                genres:[{color:'green' , title: 'mys'} , {color: 'red' , title: 'psy'}]
              },
              {
                title: "The Clockwork Alchemist",
                img:"https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                genres:[{color:'purple' , title: 'adv'} , {color: 'orange' , title: 'thr'}]
              },
              {
                title: "The Oracle's Prophecy",
                img:"https://w.wallhaven.cc/full/9m/wallhaven-9m2e68.jpg",
                genres:[{color:'red' , title: 'stp'} , {color: 'green' , title: 'fan'}]
              }]
            }
          ]}
        />
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} />
    </div>
  );
}

export default App;
