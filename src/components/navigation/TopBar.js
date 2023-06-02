import { BellIcon, Chatcon, CheckIcon, ClockIcon, CloseIcon, FilterIcon, HamburgerIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import BookCard from "../BookCard";
import BookProgress from "../BookProgress";
import {useState} from 'react'
import Search from "../Search";

const TopBar = ({toggleNav , toggleSearch}) => {

    // fix function names

    function toggleMobileNav(){
        toggleNav.func(!toggleNav.data)
    }

    function search(){
        toggleSearch.func(!toggleSearch.data)
    }
    
    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <Search  section={'top-bar-inner'}/>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 50h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon func={toggleMobileNav}/><TimesIcon func={toggleMobileNav}/></div>
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