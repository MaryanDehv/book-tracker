import { ArrowIcon, CheckMark, StarIcon} from "../../images/icons/customIcons";
import {useRef} from "react";
import { slider } from "../../functions/_slider";
import Checkboxes from "../utils/Checkboxes";
import { useDispatch, useSelector } from "react-redux";
import { select , updateFilter } from "../../redux/states/_filtering";
import { setFilterStatus } from "../../redux/states/_modal";

const FilterBooks = () => {
    const progressBarRef = useRef()
    const progressBarLength = useRef()
    const progressBarPercentage = useRef()
    const dispatch = useDispatch()
    const {status: filterStatus} = useSelector(state => state.modal);

    const {authors, status, progress , rating , genre} = useSelector(state => state.filter);


    const refs = {
      progressBarRef: progressBarRef,
      progressBarLength: progressBarLength,
      progressBarPercentage: progressBarPercentage
    }


    const {currentPos , stopTracking , clickedButton } = slider(refs, {status , authors , progress, rating , genre , dispatch})

    const progresAmounts = [
      0 , 25 , 50 , 75 , 100
    ]

    function filterContents(){
      return (
        <>
              <div className="filter-books-group flex flex-column justify-sb">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Status </div> <div className="clear-filter-item" data-clickable="true"> Clear </div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                          <Checkboxes contents={filterStatus} check={setFilterStatus} groupName={"status"}/>
                        </div>
                    </div>
                </div>
              </div>


            <div className="filter-books-group flex flex-column justify-sb">
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title flex" style={{gap:"5px"}}> <div style={{color:"#FF4C4C"}} ref={progressBarPercentage}>{progress == false ? "0%" : progress + "%"}</div> Progress </div><div className="clear-filter-item" data-clickable="true"> Clear </div></div>
              <div className="filter-books-group-inner" onMouseUp={stopTracking} onTouchEnd={stopTracking} onMouseLeave={stopTracking}>
                <div className="percentage-bar-container" data-clickable="true"  ref={progressBarRef} onTouchStart={clickedButton} onMouseDown={clickedButton} onTouchMove={currentPos} onMouseMove={currentPos}><div className="progress-bar" ><div className="slider-bar" style={{width: progress == false ? "0%" : progress + "%"}} ref={progressBarLength}><div className="slider-button"></div></div></div></div>
              </div>
              <div className="progress-number-line flex justify-sb">
                {
                  progresAmounts.map(amount => (<div  data-clickable="true" onClick={() => {
                    dispatch(updateFilter({targetState: 'progress' , content: amount}))
                    progressBarLength.current.style.width = amount + "%"
                  }}>{amount}%</div>))
                }
              </div>
            </div>

              <div className="filter-books-group flex flex-column justify-sb authors">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div> <div className="clear-filter-item" data-clickable="true" > Clear </div> </div>
                <div className="filter-books-group-inner flex">
                  {
                    authors.map((author , index) => (<div data-clickable="true" className={`filter-item flex v-center justify-sb red ${author.checked ? "checked" : ""}`} onClick={() => dispatch(select({name: author.name , update: 'authors'}))}> {author.name} <CheckMark /> </div>))
                  }
                </div>
              </div>

              <div className="filter-books-group flex flex-column justify-sb">
                <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Genre </div><div className="clear-filter-item" data-clickable="true" > Clear</div></div>
                <div className="filter-books-group-inner">
                    <div className={`filter-selection-group`}>
                        <div className={`flex check-boxes-container`}>
                          <Checkboxes contents={genre} check={select} groupName={"genre"}/>
                        </div>
                    </div>
                </div>
              </div>

              <div className="filter-books-group flex flex-column justify-sb">
              <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div><div className="clear-filter-item" data-clickable="true"> Clear </div></div>
              <div className="filter-books-group-inner flex" style={{gap:"5px"}}>
              {
                [...Array(5)].map((star , index) => <StarIcon name={rating < index + 1 ? "gray" : "yellow"} func={() => dispatch(updateFilter({targetState: 'rating' , content: index+1}))}/>)
              }
              </div>
            </div>      
            <button data-clickable="true" className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
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