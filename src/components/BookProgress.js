import { ArrowIcon } from "../images/icons/customIcons";

const BookProgress = () => {
    return(
        <div className="book-progress">
            <div className="book-progress-image">
            </div>
            <div className="book-progress-details">
                <p> Title </p>
                <div className="book-progress-bar"></div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookProgress;