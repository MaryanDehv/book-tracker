const LineChart = () => {
    const values = [
        25,
        60,
        45,
        50,
        40
    ]

    const points = getHyp()

    function calculateLength(point){
        return (point / 60) * 200
    }

    function calculateHyp(length){
        const opposite = length;
        const hyp = Math.sqrt(Math.pow(length , 2) + Math.pow(40 , 2));
        const angle = (Math.asin(opposite / hyp) * (180 / Math.PI))
        console.log(opposite , hyp , angle)
        return {hyp: hyp , angle: angle}
    }


    function getHyp(){
        const data = [];
        values.forEach((point , index) => {
            if(index >= 0 && values[index + 1]){
                data.push({value: point , hyp: calculateHyp(calculateLength(point) - calculateLength(values[index + 1])).hyp , angle: calculateHyp(calculateLength(point) - calculateLength(values[index + 1])).angle})
            }
            if(index == values.length - 1) data.push({value: point})
        })
        
        console.log(data);

        return data;
    }

    getHyp()

    return( 
        <div className="line-chart-container">
            <ul class="line-chart">
                {
                    points.map((point , index) => (
                        <li style={{bottom:((point.value / 60) * 200) , left: ((200 / 5) * (index + 1))}}>
                            <div class="data-point" data-value={point.value}></div>
                            <div className="line" style={{width: point.hyp * 1 + "px" , transform: `rotate(${point.angle * 1}deg)`}}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LineChart