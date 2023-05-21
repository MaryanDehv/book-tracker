import { BellIcon, Chatcon, ClockIcon, FilterIcon, SearchIcon } from "../../images/icons/customIcons";

const TopBar = () => {
    return(
        <div className="top-bar flex h-center">
            <div className="container flex">
                <div className="top-bar-search">
                    <div className="top-bar-search-container">
                        <div className="search icon"><SearchIcon /></div>
                        <input className="search" type="text" placeholder="THE RIGHTEOUS MIND" />
                        <div className="filter icon"><FilterIcon /></div>
                        <div className="filtered">
                            <div className="filter-item"> Completed </div>
                        </div>
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