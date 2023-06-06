const BookCard = ({content}) => {
    return(
        <div className="book-card">      
            <div className="book-card-image" style={{backgroundImage:`url(${content.image})`}}>
            </div>
            <div className="book-card-details">
                <div>
                    <div className="book-card-details-ratings">
                        ☆☆☆☆☆
                    </div>
                    <h4>{content.title}</h4>
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