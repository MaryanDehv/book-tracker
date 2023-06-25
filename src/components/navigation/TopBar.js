import {BoardIcon,ClockIcon, HamburgerIcon, ListIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import { toggle } from "../../functions/_helper";
import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import { useLocation } from "react-router-dom";

const TopBar = () => {
    const {restructureBoard , toggleSearch , mobileNav} = useContext(DataContext);
    const[boardIcon , setBoardIcon] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname == '/'){
            setBoardIcon(true)
        } else {
            restructureBoard.set(false)
            setBoardIcon(false)
        }
    } , [location])


    function toggleMobileSearch(){
        toggle(toggleSearch)
        if(!mobileNav.variable) mobileNav.set(true)
        resetBoard()
    }

    function toggleMobileNav(){
        toggle(mobileNav)
        resetBoard()
    }

    function resetBoard(){
        if(restructureBoard.variable) restructureBoard.set(false)
    }

    function toggleRestructureBoard(){
        toggle(restructureBoard)
        resetNav();
    }

    function resetNav(){
        toggleSearch.set(false)
        mobileNav.set(false);
    }


    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <Search  section={'top-bar-inner'}/>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 5h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon func={toggleMobileNav}/><TimesIcon func={resetNav}/></div>
                        <div className="search-icon"><SearchIcon func={toggleMobileSearch} /></div>
                        {
                            boardIcon ?
                            (<div className={`board ${restructureBoard.variable ? 'selected' : ''}`} ><BoardIcon func={toggleRestructureBoard} /></div>) :
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