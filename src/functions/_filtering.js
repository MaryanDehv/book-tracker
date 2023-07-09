// refactoring list

import { dataObject } from "./_helper";

export function filter(states){
    
    function removeChecked(targetElement , state){
        const targetIndex = state.variable.findIndex(tag => tag.name == targetElement.name);
        state.variable[targetIndex].checked = false;
        state.set([...state.variable])
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

        return filterBooksByCategory(searchArr)
    }

    return{
        removeChecked,
        collectiveFilterData
    }
}

export function bookStatus(statusType){
    return dataObject('books').filter(book => book.status == statusType);
}

export function getBooksByName(name){
    let dataArray = [];
    dataObject('books').forEach((book) => {
        const {title} = book;
        if(title.toLowerCase().includes(name)){
            dataArray.push(book);
        }
    })
    return dataArray;
}

export function filterBooksByCategory(search){
    const searchProperties = Object.keys(search);
    let arr = [];
    dataObject('books').forEach(book => {
        let counter = 0;
        searchProperties.forEach(prop => {
            // books return must meet all the filter criteria. Add one to counter for each met
            if(prop == 'genre' ? book[prop].some(el => search[prop].find(item => el == item)) : search[prop].includes(book[prop])) counter++
        })

        // if count = searchProperties meaning book meets the criteria
        if(counter == searchProperties.length) arr.push(book)
        console.log(arr)
        if(arr.length > 0){
            return arr
        } else {
            return dataObject('books');
        }
    })       
}