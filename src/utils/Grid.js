const Grid = ({content}) => {
    return(
        <div className="grid-container">
            {
                content.map((item) => (
                    <div className={`grid-item ${item.class}`}>
                        {
                            item.content.map(e => (
                                (<item.component content={e} />)
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Grid;