import { useContext } from "react";
import { toggle } from "../functions/_helper";
import {FilterIcon, TimesIcon} from "../images/icons/customIcons";
import { DataContext } from "../App";
import FilterBooks from "./FilterBooks";

const SectionTitle = ({modalPanel, title , icon: Icon , filter}) => {
    const {modalType , modal} = useContext(DataContext);
    function setModal(){
        toggle(modal);
        modalType.set({component: FilterBooks})
    }
    return(
        <div className={`section-title full-width flex v-center justify-sb red`}>
            <div className="flex h-center">
                <div className="section-title-icon flex v-h-center"> 
                <Icon /> </div> <h3> {title} </h3>
            </div>
            {
                modalPanel ?
                (
                    <div className="filter-close-icon">
                        <TimesIcon func={() => toggle(modal)}/>
                    </div>
                ) : filter ?
                    (
                        <FilterIcon func={setModal} />
                    ) :
                    (
                        <div className="more flex h-center">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )
             }
        </div>
    )
}

export default SectionTitle;