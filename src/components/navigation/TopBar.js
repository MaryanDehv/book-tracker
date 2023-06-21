import {BoardIcon,ClockIcon, HamburgerIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import { toggle } from "../../functions/_helper";
import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";

const TopBar = () => {
    const {restructureBoard , toggleSearch , toggleNav} = useContext(DataContext);

    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <Search  section={'top-bar-inner'}/>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 5h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon func={() => toggle(toggleNav)}/><TimesIcon func={() => toggle(toggleNav)}/></div>
                        <div className="search-icon"><SearchIcon func={() => toggle(toggleSearch)} /></div>
                        <div className={`board ${restructureBoard.data ? 'selected' : ''}`} ><BoardIcon func={() => toggle(restructureBoard)} /></div> :
                        <div className="user"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;