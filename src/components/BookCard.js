const BookCard = ({content}) => {
    return(
        <div className="book-card">      
            <div className="book-card-image">
            </div>
            <div className="book-card-details">
                <div className="book-card-details-ratings">
                </div>
                <div>
                    <h4>{content.title}</h4>
                    <p className="book-card-details-description">
                        {content.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BookCard;