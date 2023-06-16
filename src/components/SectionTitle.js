import { toggle } from "../functions/_helper";
import { AddIcon, CheckIcon, FilterIcon, TimesIcon } from "../images/icons/customIcons";

const SectionTitle = ({modal , toggleModal , title , icon: Icon , filter}) => {
    return(
        <div className={`section-title flex v-center justify-sb red`}>
            <div className="flex h-center">
                <div className="section-title-icon flex v-h-center"> 
                <Icon /> </div> <h3> {title} </h3>
            </div>
            {
                modal ?
                (
                    <div className="filter-close-icon">
                        <TimesIcon func={() => toggle(toggleModal)}/>
                    </div>
                ) : filter ?
                    (
                        <FilterIcon func={() => toggle(toggleModal)} />
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