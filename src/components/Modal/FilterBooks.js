import { ArrowIcon, ArrowPlain, CheckMark, StarIcon} from "../../images/icons/customIcons";
import { check } from "../../functions/_helper";
import { useContext, useRef, useState} from "react";
import {DataContext} from '../../App';
import { filter } from "../../functions/_filtering";
import bookData from "../../data/data";

const FilterBooks = () => {
    const {status , authors , progressBar , ratings , modal , bookCategories , genres , filteredBooks} = useContext(DataContext);
    const [categoriesSelected , setCategoriesSelected] = useState(false)
    const progressBarRef = useRef()
    const progressBarLength = useRef()
    const progressBarPercentage = useRef()

    const refs = {
      progressBarRef: progressBarRef,
      progressBarLength: progressBarLength,
      progressBarPercentage: progressBarPercentage
    }

    const states = {status , authors , progressBar , modal , ratings , genres , filteredBooks};
    const {currentPos , stopTracking , clickedButton } = filter(refs ,states).slider()
    const {collectiveFilterData} = filter("" , states , bookData)

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
                <div className="filter-books-group-title"><div className="uppercase title"> Category </div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                            {
                                status.variable.map((tag , index) => (
                                    <div data-clickable="true" key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , status)} data-check={tag.name.toLowerCase()}>
                                        <div className={`${tag.color}`}>
                                            <CheckMark />
                                        </div>
                                        <p> {tag.name} </p>
                                    </div>
                                ))
                            }
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
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Progress </div><div ref={progressBarPercentage}></div></div>
              <div className="filter-books-group-inner" onMouseUp={stopTracking} onTouchEnd={stopTracking} onMouseLeave={stopTracking}>
                <div className="percentage-bar-container" data-clickable="true"  ref={progressBarRef} onTouchStart={clickedButton} onMouseDown={clickedButton} onTouchMove={currentPos} onMouseMove={currentPos}><div className="progress-bar" ><div className="slider-bar" style={{width: "0%"}} ref={progressBarLength}><div className="slider-button"></div></div></div></div>
              </div>
              <div className="progress-number-line flex justify-sb">
                {
                  progresAmounts.map(amount => (<div  data-clickable="true" onClick={() => {
                    progressBar.set(amount);
                    progressBarLength.current.style.width = amount + "%"
                    progressBarPercentage.current.innerHTML = amount + "%"
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
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div></div>
                <div className="filter-books-group-inner flex">
                  {
                    authors.variable.map((author , index) => (<div data-clickable="true" className={`filter-item flex v-center justify-sb red ${author.checked ? "checked" : ""}`} onClick={() => check(index , authors)}> {author.name} <CheckMark /> </div>))
                  }
                </div>
              </div>
            ) : ""
          }
          {
            selected.includes('genre') ?
            (
              <div className="filter-books-group flex flex-column justify-sb">
                <div className="filter-books-group-title"><div className="uppercase title"> Genre </div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                            {
                                genres.variable.map((tag , index) => (
                                    <div data-clickable="true" key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , genres)} data-check={tag.name.toLowerCase()}>
                                        <div className="gray">
                                            <CheckMark />
                                        </div>
                                        <p> {tag.name} </p>
                                    </div>
                                ))
                            }
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
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div></div>
              <div className="filter-books-group-inner flex" style={{gap:"5px"}}>
              {
                [...Array(5)].map((star , index) => <StarIcon name={ratings.variable < index + 1 ? "gray" : "yellow"} func={() => ratings.set(index+1)}/>)
              }
              </div>
            </div>
            ) : ""
          }          
            <button data-clickable="true" onClick={collectiveFilterData} className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </>
      )
    }

    function selectFilterOptions(){
      return(
        <>
          <div className="choose-filter">
            Choose your filter options
          </div>
          <div className="flex check-boxes-container">
          {
              bookCategories.variable.map((tag , index) => (
                  <div data-clickable="true"  key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , bookCategories)} data-check={tag.name.toLowerCase()}>
                      <div className={`gray`}>
                          <CheckMark />
                      </div>
                      <p> {tag.name} </p>
                  </div>
              ))
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