import { BellIcon, Chatcon, CheckIcon, ClockIcon, CloseIcon, FilterIcon, HamburgerIcon, SearchIcon, TimesIcon } from "../../images/icons/customIcons";
import BookCard from "../BookCard";
import BookProgress from "../BookProgress";

const TopBar = () => {
    return(
        <div className="top-bar flex h-center">
            <div className="top-bar-inner margin-l-r-20 justify-sb flex">
                <div className="top-bar-inner-search filtered">
                    <div className="top-bar-inner-search-container flex v-center justify-sb">
                        <div className="flex v-center">
                            <div className="search icon"><SearchIcon /></div>
                            <input className="search" type="text" placeholder="THE RIGHTEOUS MIND" />
                            <div className="filtered flex">
                                <div className="filter-item flex v-center green"> Com <TimesIcon /></div>
                                <div className="filter-item flex v-center red"> Ong <TimesIcon /></div>
                            </div>
                        </div>

                        <div className="flex v-center">
                            <div className="filter icon"><FilterIcon /></div>
                            <div className="close icon"><CloseIcon /></div>
                        </div>
                    </div>
                    <div className="top-bar-inner-search-dropdown">
                        <div className="top-bar-inner-search-dropdown-inner search-results hidden">
                            <div className="top-bar-inner-search-dropdown-inner-group">
                                <div className={`section-title flex v-center green`}>
                                    <div className="section-title-icon flex v-h-center"> <CheckIcon /> </div> <h3> Completed </h3>
                                </div>
                                <div className="section-list">
                                    <BookCard 
                                        content={{
                                            img: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                                            title: "Whispers of the Forgotten",
                                            description: "Forgotten secrets revealed in town.",
                                            author: "Jonathan Haidt"
                                        }}
                                    />
                                    <BookCard 
                                        content={{
                                            img: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                                            title: "The Enigmatic Key",
                                            description: "Global chase uncovers key's power.",
                                            author: "Jonathan Haidt"
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
                                            img:"https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                                            title: "the silent observer"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="top-bar-inner-search-dropdown-inner filter-group">
                            <div className="top-bar-inner-search-dropdown-inner-group flex justify-sb">
                                <div className="filter-check flex v-center">
                                    <div className="green"></div>
                                    <p> Completed </p>
                                </div>
                                <div className="filter-check flex v-center">
                                    <div className="red"></div>
                                    <p> ongoing </p>
                                </div>
                                <div className="filter-check flex v-center">
                                    <div className="orange"></div>
                                    <p> reading trends </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-bar-inner-account flex">
                    <p className="flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 50h 30m</strong> <span className="opacity">this week</span></p>
                    <div className="icons flex v-center">
                        <div className="hamburger-icon"><HamburgerIcon/></div>
                        <div className="search-icon"><SearchIcon /></div>
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