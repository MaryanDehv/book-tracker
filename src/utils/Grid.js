import { useState } from "react";

const Grid = ({content , setWidth}) => {
    const [blockWidth , setBlockWidth] = useState();

    const gridOptions = [
        3, 2, 1
    ]

    function toggle(i){
        setBlockWidth(i);
    }

    function getWidth(width , parentIndex){
        setWidth({width:width, parent: parentIndex})
        setBlockWidth("close")
    }
    

    return(
        <div className="grid-container">
            {
                content.map((item, index) => (
                    <div key={index} className={`grid-item flex ${item.class} ${item.size ? item.size : ""}`} style={{gridColumn:item.blockWidth ? `auto / span ${item.blockWidth}` : "auto"}}>
                            {
                                blockWidth != 'close' ?
                                blockWidth == index ?
                                (
                                    <div className="choose-block-width">
                                        <div className="choose-block-width-inner">
                                            {
                                                gridOptions.map(block => (<div data-clickable="true" data-width={block} onClick={() => getWidth(block , index)}></div>))
                                            }
                                        </div>
                                    </div>
                                ) :
                                ""
                                : ""
                            }
                            <div className={`section-title full-width flex v-center justify-sb ${item.groupTitle.color}`}>
                                <div className="flex h-center"><div className="section-title-icon flex v-h-center"> <item.groupTitle.component /> </div> <h3> {item.groupTitle.name} </h3></div><div data-clickable="true" className="more flex h-center" onClick={() => toggle(index)}><div></div><div></div><div></div></div>
                            </div>
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
        </div>
    )
}

export default Grid;