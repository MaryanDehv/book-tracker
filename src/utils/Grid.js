const Grid = ({content}) => {
    return(
        <div className="grid-container">
            {
                content.map((item) => (
                    <div className={`grid-item ${item.class}`}>
                            <div className={`section-title flex v-center justify-sb ${item.groupTitle.color}`}>
                                <div className="flex h-center"><div className="section-title-icon flex v-h-center"> <item.groupTitle.component /> </div> <h3> {item.groupTitle.name} </h3></div><div className="more flex h-center"><div></div><div></div><div></div></div>
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