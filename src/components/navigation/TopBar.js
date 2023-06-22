import {BoardIcon,ClockIcon, HamburgerIcon, ListIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import { toggle } from "../../functions/_helper";
import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";

const TopBar = () => {
    const {restructureBoard , toggleSearch , toggleNav} = useContext(DataContext);
    const[boardIcon , setBoardIcon] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname == '/'){
            setBoardIcon(true)
        } else {
            setBoardIcon(false)
        }
    } , [location])


    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <Search  section={'top-bar-inner'}/>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 5h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon func={() => toggle(toggleNav)}/><TimesIcon func={() => toggle(toggleNav)}/></div>
                        <div className="search-icon"><SearchIcon func={() => toggle(toggleSearch)} /></div>
                        {
                            boardIcon ?
                            (<div className={`board ${restructureBoard.variable ? 'selected' : ''}`} ><BoardIcon func={() => toggle(restructureBoard)} /></div>) :
                            ""
                        }
                        <div className="user"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;