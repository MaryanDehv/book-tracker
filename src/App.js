import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';

function App() {
  return (
    <div className="App main-container light-mode">
      <SideBar />
      <TopBar />
    </div>
  );
}

export default App;
