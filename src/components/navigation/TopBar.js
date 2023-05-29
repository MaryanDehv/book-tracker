import { BellIcon, Chatcon, CheckIcon, ClockIcon, CloseIcon, FilterIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import BookCard from "../BookCard";
import BookProgress from "../BookProgress";

const TopBar = () => {
    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <div className="top-bar-inner-search">
                    <div className="top-bar-inner-search-container flex v-center justify-sb">
                        <div className="flex v-center">
                            <div className="search icon"><SearchIcon /></div>
                            <input className="search" type="text" placeholder="THE RIGHTEOUS MIND" />
                            <div className="filtered flex">
                                <div className="filter-item flex v-center"> Completed <TimesIcon /></div>
                            </div>
                        </div>

                        <div className="flex v-center">
                            <div className="filter icon"><FilterIcon /></div>
                            <div className="close icon"><CloseIcon /></div>
                        </div>
                    </div>
                    <div className="top-bar-inner-search-dropdown">
                        <div className="top-bar-inner-search-dropdown-inner">
                            <div className="top-bar-inner-search-dropdown-inner-group">
                                <div className={`section-title flex v-center green`}>
                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Completed </h3>
                                </div>
                                <div className="section-list">
                                    <BookCard 
                                        content={{
                                            image: "",
                                            title: "testing",
                                            description: "lorem something somwthing blah blah"
                                        }}
                                    />
                                    <BookCard 
                                        content={{
                                            image: "",
                                            title: "testing",
                                            description: "lorem something somwthing blah blah"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="top-bar-inner-search-dropdown-inner-group grayed">
                                <div className={`section-title flex v-center red`}>
                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Ongoing </h3>
                                </div>
                                <div className="section-list">
                                    <BookProgress 
                                        content={{
                                            image: "",
                                            title: "testing",
                                            description: "lorem something somwthing blah blah"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-bar-inner-account flex">
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