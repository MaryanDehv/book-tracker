const BookGraph = () => {
    const viewCount = [
        {height: "10%"},
        {height: "40%"},
        {height: "15%"},
        {height: "65%"},
        {height: "25%"},
        {height: "55%"},
        {height: "75%"},
    ];

    return(
        <div className="graph">
            <div className="graph_main-view">
                <div className="graph_bars-container flex">
                    {viewCount.map((bar , index) => (
                        <div className="bar-container" key={index}>
                            <div className="bar-increase"> 
                                <div className="bar" style={bar}>
                                    <div className="bar-data-popup">
                                        <p className="date"> 24 September </p>
                                        <div className="views flex"><div></div><span>20k</span></div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="graph-x-axis flex">
                    <span> 22 </span>
                    <span> 23 </span>
                    <span> 24 </span>
                    <span> 25 </span>
                    <span> 26 </span>
                    <span> 27 </span>
                    <span> 28 </span>
                </div>
            </div>
            <div className="graph-y-axis flex">
                <span> 35 </span>
                <span> 30 </span>
                <span> 25 </span>
                <span> 20 </span>
                <span> 15 </span>
                <span> 10 </span>
                <span> 5 </span>
            </div>
        </div>
    )
}

export default BookGraph;