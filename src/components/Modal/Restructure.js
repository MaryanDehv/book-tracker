import {useEffect, useState } from "react";
import { TimesIcon } from "../../images/icons/customIcons";
import { useDispatch, useSelector } from "react-redux";
import { rearrange, touch , updateGridWidth} from "../../redux/states/_dashboard";

const Restructure = () => {
    const [changeWidth , setChangeWidth] = useState()
    const {boardLayout , currentSelected} = useSelector(state => state.dashboard)
    const dispatch = useDispatch()


    useEffect(() => {
        if(currentSelected.length == 2) dispatch(rearrange({from:currentSelected[0] , to:currentSelected[1]}))
    } , [currentSelected]) 

    
    const gridOptions = [
        3, 2, 1
    ]

    return(
        <div className="restructure-backdrop">

            <div className="restructure-backdrop-inner">
                {
                    boardLayout.map((_ , index) =>
                    (
                        <div
                        data-clickable="true"
                        key={index} 
                        style={{gridColumn: _.blockWidth ? `auto / span ${_.blockWidth}` : "auto"}}
                        className={`${_.size ? _.size : ""} restructure-block-color flex flex-column ${_.groupTitle.color} ${currentSelected.length > 0 ? index == currentSelected[0] ? "from-selected" : index == currentSelected[1] ? "to-selected" : "move-here": ""}`}
                        >
                        {
                            changeWidth == index ?
                            <div className="restructure-board-widths">
                            <TimesIcon func={() => setChangeWidth()} />
                            <div className="restructure-board-widths-inner">
                                {
                                gridOptions.map(block => (<div className={_.blockWidth == block ? "current-width" : ""} data-clickable="true" data-width={block} onClick={() => dispatch(updateGridWidth({width: block , parent: index}))}></div>))
                                }
                            </div>
                            </div> :
                            ""
                        }
                        <div className="flex flex-column v-center restructure-backdrop-inner-content">
                            <_.groupTitle.component/>
                            <div>{_.groupTitle.name}</div>
                        </div>
                        <div className="flex uppercase restructure-options">
                            <div className="flex v-h-center" data-clickable="true" data-options="order" onClick={(el) => {dispatch(touch({index}))}}></div>
                            <div className="flex v-h-center" data-clickable="true" data-options="width" onClick={() => setChangeWidth(index)}></div>
                        </div>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    );
}

export default Restructure;