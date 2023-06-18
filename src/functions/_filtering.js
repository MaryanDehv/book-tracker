export function filter(refs , states , data){

    function slider(){
        const {progressBarLength , progressBarPercentage , progressBarRef} = refs;
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
                    progressBarPercentage.current.innerHTML = percent+ "%"
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

    function filterBooksByName(name , books){
        let data = [];
        books.forEach((book) => {
            const {title} = book;
            if(title.toLowerCase().includes(name)){
                data.push(book);
            }
        })

        return data;
    }

    
    function removeChecked(targetElement , state){
        const targetIndex = state.variable.findIndex(tag => tag.name == targetElement.name);
        state.variable[targetIndex].checked = false;
        state.set([...state.variable])
    }

    function sortBooksBasedOnStatus(statusType , source){
        return source.books.filter(book => book.status == statusType);
    }

    function collectiveFilterData(){
        const {modal , ratings, progressBar , authorFilterOpt , filterOpt} = states;
        const authors = authorFilterOpt.variable.filter(author => author.checked);
        const filters = filterOpt.variable.filter(filter => filter.checked);
        // console.log(ratings.variable , progressBar.variable , authorFilterOpt.variable , filterOpt.variable)
        // const r = data.books.filter((book) => {
        //     const authors = authorFilterOpt.variable.filter(author => author.checked);
        //     const filters = filterOpt.variable.filter(filter => filter.checked);
        // })
        modal.set(false)
    }

    return{
        slider,
        filterBooksByName,
        removeChecked,
        sortBooksBasedOnStatus,
        collectiveFilterData
    }
}