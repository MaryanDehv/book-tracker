import { ArrowIcon, ArrowPlain, CheckMark, StarIcon} from "../../images/icons/customIcons";
import { check } from "../../functions/_helper";
import { useContext, useRef, useState} from "react";
import {DataContext} from '../../App';
import { slider } from "../../functions/_slider";
import { clearFilters, collectiveFilterData } from "../../functions/_filtering";
import Checkboxes from "../utils/Checkboxes";

const FilterBooks = () => {
    const {status , authors , progressBar , ratings , modal , bookCategories , genres , filteredBooks , currentFilterOptions} = useContext(DataContext);
    const [categoriesSelected , setCategoriesSelected] = useState(false)
    const progressBarRef = useRef()
    const progressBarLength = useRef()

    const refs = {
      progressBarRef: progressBarRef,
      progressBarLength: progressBarLength
    }

    const states = {status , authors , progressBar , modal , ratings , genres , filteredBooks , currentFilterOptions};
    const {currentPos , stopTracking , clickedButton } = slider(refs, states)

    const progresAmounts = [
      0 , 25 , 50 , 75 , 100
    ]

    function filterContents(){
      const selected = (bookCategories.variable.filter(cat => cat.checked == true).map(cat => cat.name.toLowerCase()));
      return (
        <>
          <div data-clickable="true" className="back-to-selection flex justify-sb v-center" onClick={() => setCategoriesSelected(false)}> <ArrowPlain /> <span className="uppercase"> Back to selection </span> </div>
          {
            selected.includes('status') ?
            (
              <div className="filter-books-group flex flex-column justify-sb">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Status </div> <div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['status']()}> Clear Status </div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                          <Checkboxes contents={status} groupName={"status"}/>
                        </div>
                    </div>
                </div>
              </div>
            ) : ""
          }
          {
            selected.includes('progress') ?
            (
            <div className="filter-books-group flex flex-column justify-sb">
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title flex" style={{gap:"5px"}}> <div style={{color:"#FF4C4C"}}>{progressBar.variable == false ? "0%" : progressBar.variable + "%"}</div> Progress </div><div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['progress']()}> Clear Progress </div></div>
              <div className="filter-books-group-inner" onMouseUp={stopTracking} onTouchEnd={stopTracking} onMouseLeave={stopTracking}>
                <div className="percentage-bar-container" data-clickable="true"  ref={progressBarRef} onTouchStart={clickedButton} onMouseDown={clickedButton} onTouchMove={currentPos} onMouseMove={currentPos}><div className="progress-bar" ><div className="slider-bar" style={{width: progressBar.variable == false ? "0%" : progressBar.variable + "%"}} ref={progressBarLength}><div className="slider-button"></div></div></div></div>
              </div>
              <div className="progress-number-line flex justify-sb">
                {
                  progresAmounts.map(amount => (<div  data-clickable="true" onClick={() => {
                    progressBar.set(amount);
                    progressBarLength.current.style.width = amount + "%"
                  }}>{amount}%</div>))
                }
              </div>
            </div>
            ) : ""
          }  
          {
            selected.includes('author') ?
            (
              <div className="filter-books-group flex flex-column justify-sb authors">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div> <div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['authors']()}> Clear Authors </div> </div>
                <div className="filter-books-group-inner flex">
                  {
                    authors.variable.map((author , index) => (<div data-clickable="true" className={`filter-item flex v-center justify-sb red ${author.checked ? "checked" : ""}`} onClick={() => check(author.name, authors)}> {author.name} <CheckMark /> </div>))
                  }
                </div>
              </div>
            ) : ""
          }
          {
            selected.includes('genre') ?
            (
              <div className="filter-books-group flex flex-column justify-sb">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Genre </div><div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['genres']()}> Clear Genres </div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                          <Checkboxes contents={genres} groupName={"genres"}/>
                        </div>
                    </div>
                </div>
              </div>
            ) : ""
          }
          {
            selected.includes('rating') ?
            (
              <div className="filter-books-group flex flex-column justify-sb">
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div><div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['ratings']()}> Clear Ratings</div></div>
              <div className="filter-books-group-inner flex" style={{gap:"5px"}}>
              {
                [...Array(5)].map((star , index) => <StarIcon name={ratings.variable < index + 1 ? "gray" : "yellow"} func={() => ratings.set(index+1)}/>)
              }
              </div>
            </div>
            ) : ""
          }          
            <button data-clickable="true" onClick={() => collectiveFilterData(states)} className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </>
      )
    }

    function selectFilterOptions(){
      return(
        <>
          <div className="choose-filter">
            Choose your filter options
          </div>
          <div className="select-categories-container flex flex-column">
            {
              bookCategories.variable.map((category, index) => <div className={`category flex justify-sb ${category.checked ? 'checked' : ''}`} data-clickable="true" onClick={(el) => check(category.name , bookCategories , {genre: genres , progressBar , author: authors , rating: ratings , status})}> {category.name.toUpperCase()} <CheckMark /></div>)
            }
          </div>
          <button data-clickable="true" onClick={checkIfEmpty} className="red-button full-width"> <span className="uppercase"> Select Filters </span><ArrowIcon /> </button>
        </>
      )
    }

    function checkIfEmpty(){
      const selected = bookCategories.variable.filter(cat => cat.checked == true);
      if(selected.length >= 1) setCategoriesSelected(true)
    }
    
    
    return(
        <div className="filter-books flex flex-column">
          {
            categoriesSelected ? 
            filterContents() :
            selectFilterOptions()
          }
        </div>
    )
}

export default FilterBooks;