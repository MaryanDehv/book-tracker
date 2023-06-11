import Search from './Search';
import Navigation from './Navigation';
const SideBar = ({themeToggle , toggleSearch}) => {

    function searchMobile(){
        return(
            <Search mobileDropdown={true}/>
        )
    }

    function mobileNav(){
        return(
            <Navigation themeToggle={themeToggle}/>
        )
    }

    return(
        <div className="side-bar">
            {toggleSearch 
            ? searchMobile()
            : mobileNav()}
        </div>
    )
}

export default SideBar;