import { ArrowIcon } from "../images/icons/customIcons";

const BookList = ({content}) => {
    return(
        <div className="book-list flex justify-sb">
            <div className="book-list-inner flex v-center">
                <div className="book-list-image" style={{backgroundImage:`url(${content.img})`}}></div>
                <div className="book-list-details">
                    <h4> {content.title} </h4>
                    <div className="book-list-genres flex">
                        {
                            content.genres.map(genre => (<div className={`filter-item ${genre.color}-outline`}> {genre.title} </div>))
                        }
                    </div>
                </div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookList;