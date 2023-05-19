import { BellIcon, Chatcon, ClockIcon } from "../../images/icons/customIcons";

const TopBar = () => {
    return(
        <div className="top-bar">
            <div className="top-bar-search">
            </div>
            <div className="top-bar-account">
                <p><ClockIcon /> Read for <strrong> 50h 30m</strrong> this week</p>
                <div className="icons">
                    <div className="message"><Chatcon /></div>
                    <div className="notification"><BellIcon /></div>
                    <div className="user"></div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;