import { ArrowIcon } from "../images/icons/customIcons";

const BookProgress = ({content}) => {
    return(
        <div className="book-progress flex justify-sb">
            <div className="book-progress-inner flex v-center">
                <div className="book-progress-image"  style={{backgroundImage:`url(${content.img})`}}>
                </div>
                <div className="book-progress-details">
                    <h4> {content.title} </h4>
                    <div className="book-progress-bar"><div className="progress"></div></div>
                </div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookProgress;