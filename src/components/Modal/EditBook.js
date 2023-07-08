import { ArrowIcon, StarIcon } from "../../images/icons/customIcons";
import LineChart from "../charts/LineChart";

const EditBook = ({props}) => {
    return(
        <div className="edit-book">
            <div className="edit-book-contents"> 
                <div className="edit-book-contents-progress">
                    <div className="heading flex justify-sb"><h4> progress </h4><span data-clickable="true"> Edit</span></div>
                    <p> {props.progress}% </p>
                </div>
                <div className="edit-book-contents-description">
                <div className="heading flex justify-sb"><h4> Description </h4><span data-clickable="true"> Edit</span></div>
                <p>
                {props.description}
                </p>
                </div>
                <div className="edit-book-contents-status">
                    <div className="heading flex justify-sb"><h4> Status </h4><span data-clickable="true"> Edit</span></div>
                    <p> {props.status} </p>
                </div>
                <div className="edit-book-contents-rating">
                    <div className="heading flex justify-sb"> <h4> rating </h4><span data-clickable="true"> Edit</span> </div>
                   {[...Array(props.rating)].map(star => <StarIcon />)}
                </div>
            </div>
            <div className="edit-book-analytics">
                <div className="edit-book-analytics-title"></div>
                <div className="edit-book-analytics-chart">
                    <LineChart />
                </div>
            </div>

            <button data-clickable="true" className="edit-book-analytics-view-logs uppercase red-button full-width"> View logs <ArrowIcon /></button>
        </div>
    );
}

export default EditBook;