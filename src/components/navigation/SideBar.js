import {Logo , ClockIcon , AnalyticsIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'
import Search from '../Search';
const SideBar = ({toggle}) => {

    const themeOptions = [
        {
            name: 'light',
            icon: SunIcon
        } ,
        {
            name: 'dark',
            icon: MoonIcon,
        }
    ]

    function searchMobile(){
        return(
            <Search />
        )
    }

    function mobileNav(){
        return(
            <>
                <div className="side-bar-logo flex v-center">
                    <Logo />
                </div>
                <div className="side-bar-mobile-nav-user-details flex v-center">
                    <div className="side-bar-avatar"><div className="side-bar-avatar-designs"></div></div>
                    <div className="side-bar-read-notice flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 50h 30m</strong> <span className="opacity">this week</span></div>
                    <p className="side-bar-user"> Luffy </p>
                </div>
                <div className="side-bar-content flex v-center">
                    <ul className="side-bar-list">
                        <li className="uppercase button flex v-center"><span><ClockIcon /></span><span className="list-name">Ongoing</span></li>
                        <li className="uppercase button flex v-center"><span><CheckIcon /></span><span className="list-name">Completed</span></li>
                        <li className="uppercase button flex v-center"><span><ListIcon /></span><span className="list-name">List</span></li>
                        <li className="uppercase button flex v-center"><span><CogIcon /></span><span className="list-name">Setitngs</span></li>
                        <li className="uppercase button flex v-center red-button"><span><AddIcon /></span><span className="list-name">Add Book</span></li>
                    </ul>
                    <div className="side-bar-mode-container flex h-center">
                        <div className="side-bar-mode flex v-h-center">
                            {themeOptions.map(theme => (
                                <div className={`side-bar-light flex v-h-center ${toggle.theme == theme.name ? 'selected' : ''}`} onClick={() => themeMode(theme.name)}><theme.icon /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    function themeMode(theme){
        toggle.func(theme)
    }

    return(
        <div className="side-bar">
            {mobileNav()}
        </div>
    )
}

export default SideBar;