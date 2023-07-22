import {AddIcon, BoardIcon,ClockIcon, HamburgerIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import { setModal} from "../../functions/_helper";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Restructure from "../Modal/Restructure";


import {useDispatch} from 'react-redux';
import { toggle } from "../../redux/states/_navigation";
import { modalType } from "../../redux/states/_modal";
import { toggleAddBoard } from "../../redux/states/_dashboard";
import SelectBoard from "../Modal/SelectBoard";


const TopBar = () => {
    const[boardIcon , setBoardIcon] = useState(false)
    
    const location = useLocation()
    const dispatch = useDispatch()

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
                        <div className="hamburger-icon"><HamburgerIcon func={() => dispatch(toggle('mobileNav'))}/><TimesIcon func={() => dispatch(toggle('mobileNav'))}/></div>
                        <div className="search-icon"><SearchIcon func={() => dispatch(toggle('mobileSearch'))} /></div>
                        {
                            boardIcon ?
                            (
                                <>
                                    <div className="add-board flex v-h-center" data-clickable="true" onClick={() => dispatch(dispatch(modalType({component: SelectBoard , title: "Add board" , icon: AddIcon})))}>
                                        <AddIcon />
                                    </div>
                                    <div className={`board`} ><BoardIcon func={() => dispatch(modalType({component: Restructure , title: "Customize Dashboard" , icon: AddIcon}))} /></div>
                                </>
                            ) :
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