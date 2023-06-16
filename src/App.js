import './App.css';
import TopBar from './components/navigation/TopBar';
import SideBar from './components/navigation/SideBar';
import { useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';
import Modal from './components/Modal';
import AddBook from './components/AddBook';


// ability to restructure page layouts

function App() {

  const [theme , setTheme] = useState('dark')
  const [mobileNav , setMobileNav] = useState(false);
  const [mobileSearch , setMobileSearch] = useState(false);
  const [startRestructure , setStartRestructure] = useState(false);
  const [modal , setModal] = useState(false)

  useEffect(() => {
    console.log(modal , 'from app')
  }, [modal])
  
  return (
    <div className={`App ${mobileSearch ? 'mobile-search' : ''} ${mobileNav ? 'mobile-nav' : ''} ${theme}-mode`}>
      <SideBar themeToggle={{theme: theme , func: setTheme}} toggleSearch={setMobileSearch} toggleModal={{data: modal , func: setModal}}/>
      <div className="main padding-l-r-2">
        {modal? 
          <Modal toggleModal={{data: modal , func: setModal}}/>
          : ""
        }
        <Outlet context={[startRestructure , setStartRestructure , modal , setModal]}/>
      </div>
      <TopBar toggleNav={{data: mobileNav , func: setMobileNav}} toggleSearch={{data: mobileSearch , func: setMobileSearch}} toggleStructureBoard={{data: startRestructure , func: setStartRestructure}} />
    </div>
  );
}

export default App;