import { ArrowIcon } from "../images/icons/customIcons";

const BookList = () => {
    return(
        <div className="book-list flex justify-sb">
            <div className="book-list-inner flex v-center">
                <div className="book-list-image"></div>
                <div className="book-list-details">
                    <p> The Righteous Mind </p>
                    <div className="book-list-genres flex">
                        <div className="filter-item"> Psych </div>
                        <div className="filter-item"> Psych </div>
                        <div className="filter-item"> Psych </div>
                    </div>
                </div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookList;