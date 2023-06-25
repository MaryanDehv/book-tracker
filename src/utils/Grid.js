import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Grid = ({content , setWidth}) => {
    const [blockWidth , setBlockWidth] = useState();

    return(
        <div className="grid-container">
            {
                content.map((item, index) => (
                    <div key={index} className={`grid-item flex ${item.class} ${item.size ? item.size : ""}`} style={{gridColumn:item.blockWidth ? `auto / span ${item.blockWidth}` : "auto"}}>
                            {/* <div className={`section-title full-width flex v-center justify-sb ${item.groupTitle.color}`}>
                                <div className="flex h-center"><div className="section-title-icon flex v-h-center"> <item.groupTitle.component /> </div> <h3> {item.groupTitle.name} </h3></div>
                            </div> */}
                            
                            <SectionTitle icon={item.groupTitle.component} title={item.groupTitle.name}/>
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