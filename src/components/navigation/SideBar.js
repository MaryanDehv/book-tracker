import Search from './Search';
import Navigation from './Navigation';
const SideBar = ({themeToggle , toggleSearch}) => {
    
    // mobile dropdown?

    return(
        <div className={`side-bar`}>
                <Search mobileDropdown={true} toggleMobileSearch={toggleSearch}/>
                <Navigation themeToggle={themeToggle}/>
        </div>
    )
}

export default SideBar;