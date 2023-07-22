import { TimesIcon } from "../../images/icons/customIcons";
import SectionTitle from "../headings/SectionTitle";
import { removeGridItem, toggleAddBoard } from "../../redux/states/_dashboard";
import { useDispatch} from "react-redux";

const Grid = ({content}) => {
    const dispatch = useDispatch()

    return(
        <div className="grid-container">
            {
                content.length > 0 ? 
                <>
                {
                   content.map((item, index) => (
                    <div key={index} className={`grid-item flex ${item.class} ${item.size ? item.size : ""}`} style={{gridColumn:item.blockWidth ? `auto / span ${item.blockWidth}` : "auto"}}>                            
                            <SectionTitle title={{icon: item.groupTitle.component, name:item.groupTitle.name}} icon={TimesIcon} cb={() => dispatch(removeGridItem(index))}/>
                            <div className="grid-item-content">
                                {
                                    item.content.map(e => (
                                        (<item.component content={e} />)
                                    ))
                                }
                            </div>
                    </div>
                )) 
                }
                </> :
                ""
            }
        </div>
    )
}

export default Grid;