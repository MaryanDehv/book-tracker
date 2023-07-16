import { ArrowIcon, ArrowPlain, CheckMark, StarIcon} from "../../images/icons/customIcons";
import { check } from "../../functions/_helper";
import { useContext, useRef, useState} from "react";
import {DataContext} from '../../App';
import { slider } from "../../functions/_slider";
import { clearFilters, collectiveFilterData } from "../../functions/_filtering";
import Checkboxes from "../utils/Checkboxes";

const FilterBooks = () => {
    const {status , authors , progressBar , ratings , modal , bookCategories , genres , filteredBooks , currentFilterOptions} = useContext(DataContext);
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
      return (
        <>
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

              <div className="filter-books-group flex flex-column justify-sb authors">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div> <div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['authors']()}> Clear Authors </div> </div>
                <div className="filter-books-group-inner flex">
                  {
                    authors.variable.map((author , index) => (<div data-clickable="true" className={`filter-item flex v-center justify-sb red ${author.checked ? "checked" : ""}`} onClick={() => check(author.name, authors)}> {author.name} <CheckMark /> </div>))
                  }
                </div>
              </div>

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

              <div className="filter-books-group flex flex-column justify-sb">
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div><div className="clear-filter-item" data-clickable="true" onClick={() => clearFilters(states)['ratings']()}> Clear Ratings</div></div>
              <div className="filter-books-group-inner flex" style={{gap:"5px"}}>
              {
                [...Array(5)].map((star , index) => <StarIcon name={ratings.variable < index + 1 ? "gray" : "yellow"} func={() => ratings.set(index+1)}/>)
              }
              </div>
            </div>      
            <button data-clickable="true" onClick={() => collectiveFilterData(states)} className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </>
      )
    }
    
    
    return(
        <div className="filter-books flex flex-column">
          {filterContents()}
        </div>
    )
}

export default FilterBooks;