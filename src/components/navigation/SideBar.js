import {Logo , ClockIcon , AnalyticsIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'

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

    function themeMode(theme){
        toggle.func(theme)
    }

    return(
        <div className="side-bar">
            <div className="side-bar-logo flex v-center">
                <Logo />
            </div>
            <div className="side-bar-content flex v-center">
                <ul className="side-bar-list">
                    <li className="uppercase button flex v-center"><span><ClockIcon /></span><span className="list-name">Ongoing</span></li>
                    <li className="uppercase button flex v-center"><span><CheckIcon /></span><span className="list-name">Completed</span></li>
                    <li className="uppercase button flex v-center"><span><ListIcon /></span><span className="list-name">List</span></li>
                    <li className="uppercase button flex v-center"><span><CogIcon /></span><span className="list-name">Setitngs</span></li>
                    <li className="uppercase button flex v-center"><span><AddIcon /></span><span className="list-name">Add Book</span></li>
                </ul>
                <div className="side-bar-mode-container flex h-center">
                    <div className="side-bar-mode flex v-h-center">
                        {themeOptions.map(theme => (
                            <div className={`side-bar-light flex v-h-center ${toggle.theme == theme.name ? 'selected' : ''}`} onClick={() => themeMode(theme.name)}><theme.icon /></div>
                        ))}
                        {/* <div className="side-bar-light flex v-h-center selected"><SunIcon /></div>
                        <div className="side-bar-dark flex v-h-center"><MoonIcon /></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;