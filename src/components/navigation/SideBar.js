import Search from './Search';
import Navigation from './Navigation';
const SideBar = ({themeToggle , toggleSearch, toggleModal}) => {
    return(
        <div className={`side-bar`}>
                {/* search section when on mobile only */}
                <Search mobileDropdown={true} toggleMobileSearch={toggleSearch}/>
                {/* same navigation source for mobile and desktop */}
                <Navigation themeToggle={themeToggle} toggleModal={toggleModal}/>
        </div>
    )
}

export default SideBar;