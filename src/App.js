import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Grid from './utils/Grid';
import BookCard from './components/BookCard';
import BookProgress from './components/BookProgress';
import BookList from './components/BookList';
import BookGraph from './components/BookGraph';

function App() {
  return (
    <div className="App light-mode">
      <SideBar />
      <div className="main padding-l-r-20">
        <Grid 
          content={[
            {
              component: BookCard,
              class:"book-card-container flex",
              content:[{
                image: "",
                title: "testing",
                description: "lorem something somwthing blah blah"
              },
              {
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
              class:"book-graph-container",
              content:[{
                title: "testing",
                description: "lorem something somwthing blah blah"
              }]
            },
            {
              component: BookList,
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
