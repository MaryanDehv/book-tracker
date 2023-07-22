import {Logo , ClockIcon , ListIcon , CogIcon , AddIcon , CheckIcon, SunIcon , MoonIcon} from '../../images/icons/customIcons'
import { useContext } from 'react'
import { DataContext } from '../../App'
import AddBook from '../Modal/AddBook'
import { useSelector , useDispatch} from 'react-redux'
import { toggle , theme} from '../../redux/states/_navigation'
import { modalType } from '../../redux/states/_modal'

const Navigation = () => {    
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

    const navigation = [
        {
            name:"Ongoing",
            link: process.env.PUBLIC_URL + "/#/books?filter=ongoing",
            icon: ClockIcon
        },{
            name:"Completed",
            link: process.env.PUBLIC_URL + "/#/books?filter=completed",
            icon: CheckIcon
        },{
            name:"List",
            link: process.env.PUBLIC_URL + "/#/books?filter=list",
            icon: ListIcon
        },{
            name:"Ongoing",
            link: process.env.PUBLIC_URL + "/#/books?filter=ongoing",
            icon: ClockIcon
        }
    ]
    

    const {themeMode} = useSelector(state => state.navigation);
    const dispatch = useDispatch()


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
                    {
                        navigation.map(item => ( <a data-clickable="true" href={item.link}><li className="uppercase button flex v-center"><span><item.icon /></span><span className="list-name">{item.name}</span></li></a>))
                    }
                    <li className="uppercase button flex v-center red-button" data-clickable="true" onClick={() => dispatch(modalType({component: AddBook , title: "Add Book" , icon: AddIcon}))}><span><AddIcon /></span><span className="list-name">Add Book</span></li>
                </ul>
                <div className="side-bar-mode-container flex h-center">
                    <div className="side-bar-mode flex v-h-center" >
                        {themeOptions.map((mode , index) => (
                            <div key={index} className={`side-bar-light flex ${themeMode == mode.name ? 'selected' : ""} v-h-center`} data-clickable="true" onClick={() => dispatch(theme(mode.name))}><mode.icon /></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;