import { Component, useEffect, useRef, useState } from "react";

const LineChart = () => {

    const [boardWidth, setBoardWidth] = useState();

    const width = useRef()


    useEffect(() => {
        setTimeout(() => {
            setBoardWidth(width.current.getBoundingClientRect().width);
        } , 1000)
    } , [])

    const chartValues = [{value: 5},{value: 2},{value: 10},{value: 4},{value: 6},{value: 3} , {value:0}]

    function formatLineChartData(values, chartHeight , chartWidth) {
        const widgetSize = chartHeight;
        const pointSize = 16;
        
        const base = (chartWidth - pointSize / 2 ) / values.length;

        let sortedValues = sortValues([...values]);

        const topMostPoint = sortedValues[0].value;
        let leftOffset = 50;
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
            currentValue.left = leftOffset;
            leftOffset += base;

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

    const sortValues = values => values.sort((a, b) => b.value - a.value)
    
    const radiansToDegrees = (rads) => rads * (180 / Math.PI)


    return( 
        <div className="line-chart-container" style={{width: boardWidth + "px"}} ref={width}>
            <ul class="line-chart">
                {
                    formatLineChartData(chartValues , 200 , boardWidth).map((point , index) => (
                        <li>
                            <div class="data-point" data-value={point.value}  style={{bottom:point.bottom - 8, left: point.left - 8}}></div>
                            <div className="line" style={{width:point.hypotenuse * 1 + "px" , transform: `rotate(${point.angle * 1}deg)` , bottom: point.bottom, left: point.left}}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LineChart