import { ArrowIcon } from "../images/icons/customIcons";

const BookProgress = () => {
    return(
        <div className="book-progress flex justify-sb">
            <div className="book-progress-inner flex v-center">
                <div className="book-progress-image">
                </div>
                <div className="book-progress-details">
                    <h4> The Righteous mind </h4>
                    <div className="book-progress-bar"><div className="progress"></div></div>
                </div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookProgress;