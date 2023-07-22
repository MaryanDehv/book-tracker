import { updateFilter } from "../redux/states/_filtering";

// slider for progress bar
export function slider(refs , {dispatch}){
    const {progressBarLength , progressBarRef , progressBarPercentage} = refs;
    let trackMoving;
    let elementActualPosition;
    let percent;

    function clickedButton(el){
        elementActualPosition = progressBarRef.current.getBoundingClientRect().right - progressBarRef.current.getBoundingClientRect().left;
        trackMoving = true;
    }

    function currentPos(el){
        if(trackMoving){
            percent = Math.round((((el.touches ? el.touches[0].clientX : el.clientX) - progressBarRef.current.getBoundingClientRect().left) * 100) / elementActualPosition);
            if(percent >= 0 && percent <= 100){
                progressBarLength.current.style.width = percent + "%"
                progressBarPercentage.current.innerHTML = percent + "%"
            }
        }
    }

    function stopTracking(){
        trackMoving = false;
        if(percent) dispatch(updateFilter({targetState: 'progress' , content: percent}))
    }    

    return{
        stopTracking,
        currentPos,
        clickedButton
    }
}