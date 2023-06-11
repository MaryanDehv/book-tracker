const HabitTracker = () => {
    function getBlocks(amount){
        let html = []
        for(let i = 0 ; i < amount ; i++){
            html.push(<div className="habit-blocks"></div>)
        }
        return html;
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