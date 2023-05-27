const BookList = () => {
    return(
        <div className="book-list">
            <div className="book-list-image"></div>
            <div className="book-list-details">
                <p> Title </p>
                <div classList="book-list-genres">
                    <div className="filter-item"> Psych </div>
                    <div className="filter-item"> Psych </div>
                    <div className="filter-item"> Psych </div>
                </div>
            </div>
        </div>
    );
}

export default BookList;