import { useContext } from "react";
import { closeModal, setModal} from "../../functions/_helper";
import {FilterIcon, TimesIcon} from "../../images/icons/customIcons";
import { DataContext } from "../../App";
import FilterBooks from "../Modal/FilterBooks";

const SectionTitle = ({modalPanel , title , icon: Icon , filter , searchDropdown}) => {
    const {modalType} = useContext(DataContext);
    
    // todo: instead of returning close icon twice, crease function where you can pass down aciton to be used for said close icon

    return(
        <div className={`section-title full-width flex v-center justify-sb red`}>
            <div className="flex v-center" style={{gap:"5px"}}>
            {Icon ?  <div className="section-title-icon flex v-h-center"> 
                <Icon /> </div>  : ""} <h3> {title} </h3>
            </div>
            {
                !searchDropdown ?
                    modalPanel ?
                    (
                        <div className="filter-close-icon">
                            <TimesIcon  func={() => closeModal(modalType)}/>
                        </div>
                    ) : filter ?
                        (
                            <div className="flex v-center" style={{gap:"5px"}}>
                                <div className="flex" style={{gap:"5px"}}> <div className="tag flex v-h-center outline" data-clickable="true"> Clear All Filters</div> <div className="filter-item flex red v-center"> tag <TimesIcon /> </div> </div>
                                <FilterIcon func={() => setModal(modalType , FilterBooks , "Filter" , FilterIcon)}/>
                            </div>
                        ) : <TimesIcon />
                    : ""
             }
        </div>
    )
}

export default SectionTitle;