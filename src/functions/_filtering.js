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

    function getBookCategories(){
        const obj = []
        const bookCategories = Object.keys(data.books[0]);
        bookCategories.forEach(cat => {
            if(!['title' , 'image' , 'color' , 'description'].includes(cat)) obj.push({name: cat})
        })
        return obj;
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
        const {modal , ratings, progressBar , authors  , status} = states;
        const filter = status.variable.filter(item => item.checked);
        const filteredAuthors = authors.variable.filter(item => item.checked);

        let searchArr = {};

        if(filter.length) searchArr['status'] = filter.map(({name}) => name.toLowerCase());
        if(filteredAuthors.length) searchArr['author'] = filteredAuthors.map(({name}) => name);
        if(progressBar.variable > 0) searchArr['progress'] =  [progressBar.variable]
        if(ratings.variable > 0) searchArr['rating'] = [ratings.variable]
        checkBooks(searchArr)
    }

    function checkBooks(search){
        const searchProperties = Object.keys(search);
        let arr = [];
        data.books.forEach(book => {
            let counter = 0;
            searchProperties.forEach(prop => {
                // books return must meet all the filter criteria. Add one to counter for each met
                if(search[prop].includes(book[prop])) counter++
            })

            // if count = searchProperties meaning book meets the criteria
            if(counter == searchProperties.length) arr.push(book)
        })

       return arr
    }

    return{
        slider,
        filterBooksByName,
        removeChecked,
        sortBooksBasedOnStatus,
        collectiveFilterData,
        getBookCategories
    }
}