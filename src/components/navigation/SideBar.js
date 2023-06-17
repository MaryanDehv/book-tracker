import Search from './Search';
import Navigation from './Navigation';
import { useContext } from 'react';
import { DataContext } from '../../App';
const SideBar = () => {
    const {toggleSearch} = useContext(DataContext)
    return(
        <div className={`side-bar`}>
                {/* search section when on mobile only */}
                <Search mobileDropdown={true} toggleMobileSearch={toggleSearch}/>
                {/* same navigation source for mobile and desktop */}
                <Navigation />
        </div>
    )
}

export default SideBar;