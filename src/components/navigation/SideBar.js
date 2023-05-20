import {Logo , ClockIcon , AnalyticsIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'

const SideBar = () => {
    return(
        <div className="side-bar">
            <div className="side-bar-logo">
                <Logo />
            </div>
            <div className="side-bar-content">
                <ul className="side-bar-list">
                    <li className="uppercase button flex v-center"><span><ClockIcon /></span><span>Ongoing</span></li>
                    <li className="uppercase button flex v-center"><span><CheckIcon /></span><span>Completed</span></li>
                    <li className="uppercase button flex v-center"><span><ListIcon /></span><span>List</span></li>
                    <li className="uppercase button flex v-center"><span><CogIcon /></span><span>Setitngs</span></li>
                    <li className="uppercase button flex v-center"><span><AddIcon /></span><span>Add Book</span></li>
                </ul>
                <div className="side-bar-mode-container flex h-center">
                    <div className="side-bar-mode flex v-h-center">
                        <div className="side-bar-light flex v-h-center selected"><SunIcon /></div>
                        <div className="side-bar-dark flex v-h-center"><MoonIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;