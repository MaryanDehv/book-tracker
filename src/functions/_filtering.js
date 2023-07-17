// refactoring list
import { dataObject } from "./_helper";

export function collectiveFilterData(states){
    const {rating, progress , authors  , status , genres , currentFilterOptions}  = states;
    const selectedStatus = status.variable.filter(item => item.checked);
    const selectedAuthors = authors.variable.filter(item => item.checked);
    const selectedGenres = genres.variable.filter(item => item.checked)

    let searchArr = {};

    if(selectedStatus.length) searchArr['status'] = selectedStatus.map(({name}) => name.toLowerCase());
    if(selectedGenres.length) searchArr['genres'] = selectedGenres.map(({name}) => name);
    if(selectedAuthors.length) searchArr['authors'] = selectedAuthors.map(({name}) => name);
    if(progress.variable > 0) searchArr['progress'] =  [progress.variable]
    if(rating.variable > 0) searchArr['rating'] = [rating.variable]

    currentFilterOptions.set(Object.keys(searchArr))

    return filterBooksByCategory(searchArr)
}

function uncheck(arr){
    const uncheckedArr = arr.variable.map(item => ({name: item.name , checked: false}))
    arr.set(uncheckedArr)
}

export function clearFilters(states){
    const {currentFilterOptions} = states;

    function excludeItem(target){
        return currentFilterOptions.variable.filter(item => item != target);
    }

    const resetStatus = () => {
        const {status} = states;
        uncheck(status)
        currentFilterOptions.set(excludeItem('status'))
    }

    const resetProgress = () => {
        const {progress} = states;
        progress.set(false)
        currentFilterOptions.set(excludeItem('progress'))
    }

    const resetGenres = () => {
        const {genres} = states
        uncheck(genres)
        currentFilterOptions.set(excludeItem('genres'))
    }

    const resetAuthors = () => {
        const {authors} = states;
        uncheck(authors)
        currentFilterOptions.set(excludeItem('authors'))
    }

    const resetRatings = () => {
        const {rating} = states;
        rating.set(false)
        currentFilterOptions.set(excludeItem('rating'))
    }

    const clearAll = () => {
        resetGenres();
        resetProgress();
        resetStatus();
        resetRatings();
        resetAuthors();
        currentFilterOptions.set([])
    }

    return {
        "status" : resetStatus,
        "authors" : resetAuthors,
        "progress" : resetProgress,
        "rating" : resetRatings,
        "genres" : resetGenres,
        "all" : clearAll
    }

}

export function bookStatus(statusType){
    // return all books with where statusType == status
    return dataObject('books').filter(book => book.status == statusType);
}

export function getBooksByName(name){
    // highlight letters found
    let dataArray = [];
    dataObject('books').forEach((book) => {
        const {title} = book;
        if(title.toLowerCase().includes(name)) dataArray.push(book);
    })
    return dataArray;
}

export function filterBooksByCategory(search){
    // user selected certain items to filter by -> books returned will be compared to that
    const searchProperties = Object.keys(search);

    let arr = [];
    dataObject('books').forEach(book => {
        let counter = 0;
        searchProperties.forEach(prop => {
            // books return must meet all the filter criteria. Add one to counter for each met
            // since genres value is an array we only need to match one of its values to return object
            if(prop == 'genre' ? book[prop].some(el => search[prop].find(item => el == item)) : search[prop].includes(book[prop])) counter++
        })

        // if count = searchProperties meaning book meets the criteria
        if(counter == searchProperties.length) arr.push(book)
        if(arr.length > 0){
            return arr
        } else {
            return dataObject('books');
        }
    })       
}