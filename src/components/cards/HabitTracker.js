const HabitTracker = () => {
    // will need to start based on when the user makes account - for now will start from 11/6
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

        const dates = getDates(new Date("2023-06-10T19:28:02.034Z") , (new Date()).addDays(amount))

        for(let i = 0 ; i < amount ; i++){
            html.push(<div className={`habit-blocks ${(new Date(dates[i].isoString)) < (new Date()) ? "yesterday" : "new"}`} onClick={colorBlock} date-date={dates[i].isoString}></div>)
        }

        return html;
    }

    function colorBlock(block){
        block.currentTarget.classList.add("read")
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