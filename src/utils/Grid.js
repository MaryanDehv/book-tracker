const Grid = ({content}) => {
    return(
        <div className="grid-container">
            {
                content.map((item) => (
                    <div className={`grid-item ${item.class}`}>
                            <div className={`section-title flex v-center ${item.groupTitle.color}`}>
                                <div className="section-title-icon flex v-h-center"> <item.groupTitle.component /> </div> <h3> {item.groupTitle.name} </h3>
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