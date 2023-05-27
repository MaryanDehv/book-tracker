import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import Grid from './utils/Grid';

function App() {
  return (
    <div className="App light-mode">
      <SideBar />
      <div className="main padding-l-r-20">
        <Grid />
      </div>
      <TopBar />
    </div>
  );
}

export default App;
