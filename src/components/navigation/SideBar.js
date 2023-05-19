import {Logo , ClockIcon , AnalyticsIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'

const SideBar = () => {
    return(
        <div className="side-bar">
            <div className="side-bar-logo">
                <Logo />
            </div>
            <ul className="side-bar-list">
                <li><span><ClockIcon /></span><span>Ongoing</span></li>
                <li><span><CheckIcon /></span><span>Completed</span></li>
                <li><span><ListIcon /></span><span>List</span></li>
                <li><span><CogIcon /></span><span>Setitngs</span></li>
                <li><span><AddIcon /></span><span>Add Book</span></li>
            </ul>
            <div className="side-bar-mode">
                <div className="side-bar-light"><SunIcon /></div>
                <div className="side-bar-dark"><MoonIcon /></div>
            </div>
        </div>
    )
}

export default SideBar;