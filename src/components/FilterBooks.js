import { ArrowIcon, CheckMark, StarIcon} from "../images/icons/customIcons";
import { check } from "../functions/_helper";
import { useContext } from "react";
import {DataContext} from '../App';

const FilterBooks = () => {
    const {filterOpt} = useContext(DataContext)
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
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Progress </div><div>50%</div></div>
            <div className="filter-books-group-inner">
              <div className="percentage-bar"><div className="slider-button"></div></div>
            </div>
          </div>
          <div className="filter-books-group flex flex-column justify-sb">
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Author</div></div>
            <div className="filter-books-group-inner flex">
            <div className={`filter-item flex v-center red`} > author </div>
            </div>
          </div>
          <div className="filter-books-group flex flex-column justify-sb">
            <div className="filter-books-group-title flex justify-sb"><div className="uppercase title"> Ratings</div></div>
            <div className="filter-books-group-inner">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
          </div>
          <button className="red-button full-width"> <span className="uppercase"> Show Results </span><ArrowIcon /> </button>
        </div>
    )
}

export default FilterBooks;