import { BellIcon, Chatcon,ClockIcon, HamburgerIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import Search from "./Search";

const TopBar = ({toggleNav , toggleSearch}) => {

    function toggle(parent){
        parent.func(!parent.data)
    }

    const mobileNav = () => {
        toggle(toggleNav)
    }

    const search = () => {
        toggle(toggleSearch)
    }
    
    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <Search  section={'top-bar-inner'}/>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 50h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon func={mobileNav}/><TimesIcon func={mobileNav}/></div>
                        <div className="search-icon"><SearchIcon func={search} /></div>
                        <div className="message"><Chatcon /></div>
                        <div className="notification"><BellIcon /></div>
                        <div className="user"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;