const BarGraph = () => {
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
            <div className="graph_bars-container flex">
                {viewCount.map((bar , index) => (
                    <div className="bar-container" key={index}>
                        <div className="bar-mask"> 
                            <div className="bar" style={bar}>
                                <div className="bar-data-popup graph-popup">
                                    <ul>
                                        <li className="flex v-center"> <div></div> The silent observer </li>
                                        <li className="flex v-center"> <div></div> beneath the crimson veil </li>
                                        <li className="flex v-center"> <div></div> the clockwork alchemist </li>
                                    </ul>
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
            <div className="graph-y-axis flex">
                <span> 7 </span>
                <span> 6 </span>
                <span> 5 </span>
                <span> 4 </span>
                <span> 3 </span>
                <span> 2 </span>
                <span> 0 </span>
            </div>
        </div>
    )
}

export default BarGraph;