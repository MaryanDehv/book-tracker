import Search from './components/Search';
import Navigation from './components/Navigation';
const SideBar = ({themeToggle}) => {

    function searchMobile(){
        return(
            <Search />
        )
    }

    function mobileNav(){
        return(
            <Navigation themeToggle={themeToggle}/>
        )
    }

    return(
        <div className="side-bar">
            {mobileNav()}
        </div>
    )
}

export default SideBar;