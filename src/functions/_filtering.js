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

    function getData(source , exclude){
        const obj = []
        const sourceData = Object.keys(source);
        sourceData.forEach(cat => {
            if(exclude ? !exclude.includes(cat) : true) obj.push({name: cat})
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
        const {ratings, progressBar , authors  , status , genres}  = states;
        const selectedStatus = status.variable.filter(item => item.checked);
        const selectedAuthors = authors.variable.filter(item => item.checked);
        const selectedGenres = genres.variable.filter(item => item.checked)

        let searchArr = {};

        if(selectedStatus.length) searchArr['status'] = selectedStatus.map(({name}) => name.toLowerCase());
        if(selectedGenres.length) searchArr['genre'] = selectedGenres.map(({name}) => name);
        if(selectedAuthors.length) searchArr['author'] = selectedAuthors.map(({name}) => name);
        if(progressBar.variable > 0) searchArr['progress'] =  [progressBar.variable]
        if(ratings.variable > 0) searchArr['rating'] = [ratings.variable]

        checkBooks(searchArr)
    }

    function checkBooks(search){
        const {filteredBooks}  = states;
        const searchProperties = Object.keys(search);
        let arr = [];
        data.books.forEach(book => {
            let counter = 0;
            searchProperties.forEach(prop => {
                // books return must meet all the filter criteria. Add one to counter for each met
                if(prop == 'genre' ? book[prop].some(el => search[prop].find(item => el == item)) : search[prop].includes(book[prop])) counter++
            })

            // if count = searchProperties meaning book meets the criteria
            if(counter == searchProperties.length) arr.push(book)

            if(arr.length > 0){
                filteredBooks.set(arr)
            } else {
                filteredBooks.set(data.books)
            }
        })       
    }

    function resetFilters(){
        const {ratings, progressBar , authors  , status , genres}  = states;
    }

    return{
        slider,
        filterBooksByName,
        removeChecked,
        sortBooksBasedOnStatus,
        collectiveFilterData,
        getData
    }
}