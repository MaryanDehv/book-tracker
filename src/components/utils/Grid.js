import { AddIcon, TimesIcon } from "../../images/icons/customIcons";
import SectionTitle from "../headings/SectionTitle";
import { removeGridItem, toggleAddBoard } from "../../redux/states/_dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Grid = ({content}) => {
    const {boardOptions , addingBoard} = useSelector(state => state.dashboard)
    const dispatch = useDispatch()

    function selectBoard(){
        return (
            <div className="select-board grid-item flex">
                {
                    boardOptions.map((option) => (<div className="flex v-h-center" data-clickable="true" onClick={() => dispatch(toggleAddBoard("close"))}><span>{option.toUpperCase()}</span></div>))
                }
            </div>
        )
    }


    return(
        <>
        <div className="add-board flex v-h-center" data-clickable="true" onClick={() => dispatch(toggleAddBoard("open"))}>
            <AddIcon />
        </div>
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
        </>
    )
}

export default Grid;