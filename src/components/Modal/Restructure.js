import { useContext, useEffect, useState } from "react";
import { restructure } from "../../functions/_restructure";
import { DataContext } from "../../App";
import { TimesIcon } from "../../images/icons/customIcons";

const Restructure = () => {
    const {selectedWidth , selection , gridLayout } = useContext(DataContext)
    const [changeWidth , setChangeWidth] = useState()
    const {rearrange , touch} = restructure({selection , gridLayout})

    function getWidth(width , parentIndex){
        selectedWidth.set({width:width, parent: parentIndex})
    }

    useEffect(() => {
        if(selection.variable.length == 2) rearrange({from:selection.variable[0] , to:selection.variable[1]})
    } , [selection.variable]) 
    
    useEffect(() => {
      if(selectedWidth.variable){
        gridLayout.variable[selectedWidth.variable.parent].blockWidth = selectedWidth.variable.width;
        gridLayout.set([...gridLayout.variable])
      }
    } , [selectedWidth.variable])

    
    const gridOptions = [
        3, 2, 1
    ]

    return(
        <div className="restructure-backdrop">

            <div className="restructure-backdrop-inner">
                {
                    gridLayout.variable.map((_ , index) =>
                    (
                        <div
                        data-clickable="true"
                        key={index} 
                        style={{gridColumn: _.blockWidth ? `auto / span ${_.blockWidth}` : "auto"}}
                        className={`${_.size ? _.size : ""} restructure-block-color flex flex-column ${_.groupTitle.color} ${selection.variable.length > 0 ? index == selection.variable[0] ? "from-selected" : index == selection.variable[1] ? "to-selected" : "move-here": ""}`}
                        >
                        {
                            changeWidth == index ?
                            <div className="restructure-board-widths">
                            <TimesIcon func={() => setChangeWidth()} />
                            <div className="restructure-board-widths-inner">
                                {
                                gridOptions.map(block => (<div className={_.blockWidth == block ? "current-width" : ""} data-clickable="true" data-width={block} onClick={() => getWidth(block , index)}></div>))
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
                            <div className="flex v-h-center" data-clickable="true" data-options="order" onClick={(el) => {touch(el, index); setChangeWidth()}}></div>
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