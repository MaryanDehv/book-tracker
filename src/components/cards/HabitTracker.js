const HabitTracker = () => {
    // will need to start based on when the user makes account - for now will start from 11/6

    const trackedDays = [
        "2023-06-13T23:00:00.034Z",
        "2023-06-11T23:00:00.034Z",
        "2023-06-14T23:00:00.034Z"
    ];

    function getBlocks(amount){
        let html = []

        Date.prototype.addDays = function(days){
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date
        }

        function getDates(startDate, stopDate) {
            let arr = [];
            let currentDate = startDate;
            while(currentDate <= stopDate) {
                arr.push({day: currentDate.getDate() ,  month: currentDate.getMonth() + 1 , isoString: currentDate.toISOString()})
                currentDate = currentDate.addDays(1);
            }
            return arr;
        }

        const dates = getDates(new Date("2023-06-10T23:00:00.034Z") , (new Date()).addDays(amount))

        for(let i = 0 ; i < amount ; i++){
            html.push(<div data-clickable="true" className={`habit-blocks ${(trackedDays.find((day => day == dates[i].isoString))) ? "tracked" : (new Date(dates[i].isoString)) < (new Date()) ? "missed-day" : ""} ${(new Date(dates[i].isoString)) < (new Date()) ? "trackable" : "not-trackable"}`} onClick={colorBlock} date-fulldate={dates[i].isoString}></div>)
        }

        return html;
    }

    function colorBlock(block){
        // if(!block.curentTarget.classList.contains('read')){
        //     block.currentTarget.classList.add("read")
        // } else {
        //     block.currentTarget.classList.remove("read")
        // }
    }

    return(
        <>
            {
                getBlocks(365).map(item => (item))
            }
        </>
    )
}

export default HabitTracker