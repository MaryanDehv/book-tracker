import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Grid from './utils/Grid';
import BookCard from './components/BookCard';
import BookProgress from './components/BookProgress';
import BookList from './components/BookList';
import BookGraph from './components/BookGraph';
import { AnalyticsIcon, CheckIcon, ClockIcon, ListIcon } from './images/icons/customIcons';

function App() {
  return (
    <div className="App light-mode">
      <SideBar />
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
                image: "",
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
                image: "",
                title: "testing",
                description: "lorem something somwthing blah blah"
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
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
                title: "testing",
                description: "lorem something somwthing blah blah"
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
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
                title: "testing",
                description: "lorem something somwthing blah blah"
              }]
            }
          ]}
        />
      </div>
      <TopBar />
    </div>
  );
}

export default App;
