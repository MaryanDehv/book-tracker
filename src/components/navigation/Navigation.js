import {Logo , ClockIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'
import { themeMode } from '../../functions/_theme'
import { toggle } from '../../functions/_helper'
import { useContext } from 'react'
import { DataContext } from '../../App'
import AddBook from '../AddBook'

const Navigation = ({toggleModal}) => {
    const {modalType , modal , themeToggle} = useContext(DataContext)
    
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

    function setModal(){
        toggle(modal);
        modalType.set({component: AddBook})
    }

    return(
        <>
            <div className="side-bar-logo flex v-center">
                <a href={process.env.PUBLIC_URL + "/"}><Logo /></a>
            </div>
            <div className="side-bar-mobile-nav-user-details flex v-center">
                <div className="side-bar-avatar"><div className="side-bar-avatar-designs"></div></div>
                <div className="side-bar-read-notice flex v-center"><ClockIcon /> <span className="opacity"> Read for </span> <strong> 5h 30m</strong> <span className="opacity">this week</span></div>
                <p className="side-bar-user"> Luffy </p>
            </div>
            <div className="side-bar-content flex v-center">
                <ul className="side-bar-list">
                    <a href={process.env.PUBLIC_URL + "/#/books?filter=ongoing"}><li className="uppercase button flex v-center"><span><ClockIcon /></span><span className="list-name">Ongoing</span></li></a>
                    <a href={process.env.PUBLIC_URL + "/#/books?filter=completed"}><li className="uppercase button flex v-center"><span><CheckIcon /></span><span className="list-name">Completed</span></li></a>
                    <a href={process.env.PUBLIC_URL + "/#/books?filter=list"}><li className="uppercase button flex v-center"><span><ListIcon /></span><span className="list-name">List</span></li></a>
                    <a href={process.env.PUBLIC_URL + "/#/books"}><li className="uppercase button flex v-center"><span><CogIcon /></span><span className="list-name">Setitngs</span></li></a>
                    <li className="uppercase button flex v-center red-button" onClick={setModal}><span><AddIcon /></span><span className="list-name">Add Book</span></li>
                </ul>
                <div className="side-bar-mode-container flex h-center">
                    <div className="side-bar-mode flex v-h-center">
                        {themeOptions.map((theme , index) => (
                            <div key={index} className={`side-bar-light flex v-h-center ${themeToggle.variable == theme.name ? 'selected' : ''}`} onClick={() => themeMode(theme.name , themeToggle)}><theme.icon /></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;