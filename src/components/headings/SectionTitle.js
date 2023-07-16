import { useContext } from "react";
import {dataObject} from "../../functions/_helper";
import {FilterIcon, TimesIcon} from "../../images/icons/customIcons";
import { DataContext } from "../../App";
import FilterBooks from "../Modal/FilterBooks";
import { clearFilters } from "../../functions/_filtering";
import { useDispatch, useSelector } from "react-redux";
import { modalType , closeModal} from "../../redux/states/_modal";

const SectionTitle = ({modalPanel , title , icon: Icon , filter , searchDropdown}) => {
    const {status , authors , progressBar , ratings , genres , currentFilterOptions} = useContext(DataContext);
    const states = {status , authors , progressBar , ratings , genres , currentFilterOptions};
    const dispatch = useDispatch();

    
    // todo: instead of returning close icon twice, crease function where you can pass down aciton to be used for said close icon

    return(
        <div className={`section-title full-width flex v-center justify-sb ${dataObject('config').status.colors[title] ? dataObject('config').status.colors[title] : "red"}`}>
            <div className="flex v-center" style={{gap:"5px"}}>
            {Icon ?  <div className={`section-title-icon flex v-h-center`}> 
                <Icon /> </div>  : ""} <h3> {title} </h3>
            </div>
            {
                !searchDropdown ?
                    modalPanel ?
                    (
                        <div className="filter-close-icon">
                            <TimesIcon  func={() => dispatch(closeModal())}/>
                        </div>
                    ) : filter ?
                        (
                            <div className="flex v-center" style={{gap:"5px"}}>
                                <div className="flex" style={{gap:"5px"}}> 
                                    {
                                        currentFilterOptions.variable.length > 0 ?
                                        (
                                            <>
                                                <div className="tag flex v-h-center outline" data-clickable="true" onClick={() => clearFilters(states)['all']()}> Clear All Filters</div>
                                                {currentFilterOptions.variable.map((option) => <div className="filter-item flex red v-center"> {option} <TimesIcon func={() => clearFilters(states)[option]()}/> </div>)} 
                                            </>
                                        ) : ""
                                    }
                                 </div>
                                <FilterIcon func={() => dispatch(modalType({component: FilterBooks , title: "Filter" , icon: FilterIcon}))}/>
                            </div>
                        ) : <TimesIcon />
                    : ""
             }
        </div>
    )
}

export default SectionTitle;