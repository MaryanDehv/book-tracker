import { StarIcon } from "../../images/icons/customIcons";

const BookCard = ({content}) => {
    return(
        <div className="book-card">      
            <div className="book-card-image" style={{backgroundImage:`url(${content.image})`}}>
            </div>
            <div className="book-card-details">
                <div>
                    <div className="book-card-details-ratings">
                        {[...Array(content.rating)].map(item => <StarIcon />)}
                    </div>
                    <h4>{content.title.substring(0, 15)}<span className="opacity">...</span></h4>
                </div>
                <p className="book-description">
                    {content.description}
                </p>
                <p className="book-author">
                    Author: <strong> {content.author} </strong>
                </p>
            </div>
        </div>
    );
}

export default BookCard;