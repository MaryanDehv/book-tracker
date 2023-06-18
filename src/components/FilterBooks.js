import { ArrowIcon, CheckMark, StarIcon} from "../images/icons/customIcons";
import { check } from "../functions/_helper";
import { useContext, useState , useRef, useEffect } from "react";
import {DataContext} from '../App';
import bookData from "../data/data";

const FilterBooks = () => {
    const {filterOpt , authorFilterOpt} = useContext(DataContext);
    const [progressBar , setProgressBar] = useState(50);
    const [starFIlter , setStarFilter] = useState(0)
    const progressBarRef = useRef()
    const progressBarLength = useRef()
    const progressBarPercentage = useRef()
    
    let trackMoving;

    let ogRight;

    function clickedButton(el){
      console.log(el)
      ogRight = progressBarRef.current.getBoundingClientRect().right - progressBarRef.current.getBoundingClientRect().left;
      trackMoving = true;
    }

    function currentPos(el){
      console.log(el)
      if(trackMoving){
        const percent = Math.round((((el.touches ? el.touches[0].clientX : el.clientX) - progressBarRef.current.getBoundingClientRect().left) * 100) / ogRight);
        if(percent >= 0 && percent <= 100){
          progressBarPercentage.current.innerHTML = percent+ "%"
          progressBarLength.current.style.width = percent + "%"
        }
      }
    }

    function stopTracking(){
      trackMoving = false;
    }


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
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Progress </div><div ref={progressBarPercentage}>{progressBar}%</div></div>
            <div className="filter-books-group-inner" onMouseUp={stopTracking} onTouchEnd={stopTracking} onMouseLeave={stopTracking}>
              <div className="percentage-bar-container" ref={progressBarRef} onTouchMove={currentPos} onMouseMove={currentPos}><div className="progress-bar" ref={progressBarLength} ><div className="slider-button" onTouchStart={clickedButton} onMouseDown={clickedButton}></div></div></div>
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
              [...Array(5)].map((star , index) => <StarIcon name={starFIlter < index + 1 ? "gray" : "yellow"} func={() => setStarFilter(index+1)}/>)
            }
            </div>
          </div>
          <button className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </div>
    )
}

export default FilterBooks;