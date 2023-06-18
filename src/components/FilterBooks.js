import { ArrowIcon, CheckMark, StarIcon} from "../images/icons/customIcons";
import { check } from "../functions/_helper";
import { useContext, useRef} from "react";
import {DataContext} from '../App';
import { filter } from "../functions/_filtering";
import bookData from "../data/data";

const FilterBooks = () => {
    const {filterOpt , authorFilterOpt , progressBar , ratings , modal} = useContext(DataContext);
    const progressBarRef = useRef()
    const progressBarLength = useRef()
    const progressBarPercentage = useRef()

    const refs = {
      progressBarRef: progressBarRef,
      progressBarLength: progressBarLength,
      progressBarPercentage: progressBarPercentage
    }

    const states = {filterOpt , authorFilterOpt , progressBar , modal , ratings};
    const {currentPos , stopTracking , clickedButton } = filter(refs ,states).slider()
    const {collectiveFilterData} = filter("" , states , bookData)
    
    
    return(
        <div className="filter-books flex flex-column">
          <div className="filter-books-group flex flex-column justify-sb">
            <div className="filter-books-group-title"><div className="uppercase title"> Category </div></div>
            <div className="filter-books-group-inner">
                <div className={`search-dropdown-inner filter-selection-group`}>
                    <div className={`search-dropdown-inner-group flex`}>
                        {
                            filterOpt.variable.map((tag , index) => (
                                <div key={index} className={`filter-check flex v-center ${tag.checked ? 'checked' : ''}`} onClick={(el) => check(index , filterOpt)} data-check={tag.name.toLowerCase()}>
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
          <div className="filter-books-group flex flex-column justify-sb">
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Progress </div><div ref={progressBarPercentage}></div></div>
            <div className="filter-books-group-inner" onMouseUp={stopTracking} onTouchEnd={stopTracking} onMouseLeave={stopTracking}>
              <div className="percentage-bar-container" ref={progressBarRef} onTouchStart={clickedButton} onMouseDown={clickedButton} onTouchMove={currentPos} onMouseMove={currentPos}><div className="progress-bar" ref={progressBarLength} ><div className="slider-button"></div></div></div>
            </div>
          </div>
          <div className="filter-books-group flex flex-column justify-sb authors">
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div></div>
            <div className="filter-books-group-inner flex">
              {
                authorFilterOpt.variable.map((author , index) => (<div className={`filter-item flex v-center justify-sb red ${author.checked ? "checked" : ""}`} onClick={() => check(index , authorFilterOpt)}> {author.name} <CheckMark /> </div>))
              }
            </div>
          </div>
          <div className="filter-books-group flex flex-column justify-sb">
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div></div>
            <div className="filter-books-group-inner">
            {
              [...Array(5)].map((star , index) => <StarIcon name={ratings.variable < index + 1 ? "gray" : "yellow"} func={() => ratings.set(index+1)}/>)
            }
            </div>
          </div>
          <button onClick={collectiveFilterData} className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </div>
    )
}

export default FilterBooks;