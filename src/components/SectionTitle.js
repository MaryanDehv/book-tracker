import { useContext } from "react";
import { setModal, toggle } from "../functions/_helper";
import {FilterIcon, TimesIcon} from "../images/icons/customIcons";
import { DataContext } from "../App";
import FilterBooks from "./FilterBooks";

const SectionTitle = ({modalPanel, title , icon: Icon , filter}) => {
    const {modalType , modal} = useContext(DataContext);

    return(
        <div className={`section-title full-width flex v-center justify-sb red`}>
            <div className="flex h-center">
            {Icon ?  <div className="section-title-icon flex v-h-center"> 
                <Icon /> </div>  : ""} <h3> {title} </h3>
            </div>
            {
                modalPanel ?
                (
                    <div className="filter-close-icon">
                        <TimesIcon func={() => toggle(modal)}/>
                    </div>
                ) : filter ?
                    (
                        <FilterIcon func={() => setModal(modal , modalType , FilterBooks , "Filter" , FilterIcon)} />
                    ) : <TimesIcon />
             }
        </div>
    )
}

export default SectionTitle;