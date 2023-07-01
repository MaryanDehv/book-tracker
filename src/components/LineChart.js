import { Component, useEffect, useRef, useState } from "react";

const LineChart = () => {

    const [boardWidth, setBoardWidth] = useState();
    const [boardHeight, setBoardHeight] = useState();

    const dimensions = useRef()

    const sortValues = values => values.sort((a, b) => b.value - a.value)
    
    const radiansToDegrees = (rads) => rads * (180 / Math.PI)


    useEffect(() => {
        setTimeout(() => {
            setBoardWidth(dimensions.current.getBoundingClientRect().width);
            setBoardHeight(dimensions.current.getBoundingClientRect().height);
        } , 1000)
    } , [])

    const chartValues = [{value: 50},{value: 20},{value: 60},{value: 10},{value: 95},{value: 10} , {value:50}]

    function getXValues(max){
        let list = [];
        const incrementAmount = max/5;
        // 168 hours in a week
        for(let i = 0 ; i <= max ; i += incrementAmount){
            list.push(i);
        }

        return list.sort((a , b) => b - a).map((item => (<span>{item}</span>)));
       
     }

    function formatLineChartData(values, chartHeight , chartWidth) {
        const widgetSize = chartHeight;
        const pointSize = 13;
        
        const base = (chartWidth - pointSize) / values.length;

        let sortedValues = sortValues([...values]);

        const topMostPoint = sortedValues[0].value;
        let leftOffset = 30;
        let nextPoint = 0;
        let rise = 0;
        let cssValues = [];

        for (var i=0, len=values.length-1; i<len; i++) {

            var currentValue = {
                left: 0,
                bottom: 0,
                hypotenuse: 0,
                angle: 0,
                value: 0
            };

            currentValue.value = values[i].value;
            // set point to the next leftOffsetvalue
            currentValue.left = leftOffset;
            // for each point keep adding set spacing between them - in this case add base width between each point
            leftOffset += base;
            
            // minus point size to add spacing at the top
            currentValue.bottom = (widgetSize - pointSize) * (currentValue.value / topMostPoint);
            nextPoint = (widgetSize - pointSize) * (values[i+1].value / topMostPoint);

            rise = currentValue.bottom - nextPoint;
            currentValue.hypotenuse = Math.sqrt((base * base) + (rise * rise));
            currentValue.angle = radiansToDegrees(Math.asin(rise / currentValue.hypotenuse));

            cssValues.push(currentValue);
        }

        var lastPoint = {
            left: leftOffset,
            bottom: (widgetSize - pointSize) * (values[values.length - 1].value / topMostPoint),
            hypotenuse: 0,
            angle: 0,
            value: values[values.length - 1].value
        };

        cssValues.push(lastPoint);

        return cssValues;
    }



    return( 
        <div className="graph line-chart" style={{width: boardWidth + "px",height: boardHeight + "px"}} ref={dimensions}>
                <div className="graph-y-axis flex flex-column justify-sb">
                    {
                        getXValues(sortValues([...chartValues])[0].value)
                    }
                </div>
                {
                    formatLineChartData(chartValues , boardHeight , boardWidth).map((point , index) => (
                        <li>
                            <div class="data-point" data-value={point.value}  style={{bottom:point.bottom - 8, left: point.left - 8}}>
                            <div className="graph-popup"> <span>Time:</span> <span>{point.value}</span></div>
                            </div>
                            <div className="line" style={{width:point.hypotenuse * 1 + "px" , transform: `rotate(${point.angle * 1}deg)` , bottom: point.bottom, left: point.left}}></div>
                        </li>
                    ))
                }
                <div className="graph-x-axis flex">
                    {
                        getXValues(sortValues([...chartValues])[0].value)
                    }
                </div>
        </div>
    )
}

export default LineChart