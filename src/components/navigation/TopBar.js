import { BellIcon, Chatcon, ClockIcon, CloseIcon, FilterIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";

const TopBar = () => {
    return(
        <div className="top-bar flex h-center">
            <div className="margin-l-r-20 justify-sb flex">
                <div className="top-bar-search">
                    <div className="top-bar-search-container flex v-center">
                        <div className="search icon"><SearchIcon /></div>
                        <input className="search" type="text" placeholder="THE RIGHTEOUS MIND" />
                        <div className="filtered flex">
                            <div className="filter-item flex v-center"> Completed <TimesIcon /></div>
                        </div>
                        <div className="filter icon"><FilterIcon /></div>
                        <div className="close icon"><CloseIcon /></div>
                    </div>
                </div>
                <div className="top-bar-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 50h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
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