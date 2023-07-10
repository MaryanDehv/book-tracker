// slider for progress bar
export function slider(refs , states){
    const {progressBarLength , progressBarRef} = refs;
    const {progressBar} = states;
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
            }
        }
    }

    function stopTracking(){
        trackMoving = false;
        if(percent) progressBar.set(percent)
    }    

    return{
        stopTracking,
        currentPos,
        clickedButton
    }
}