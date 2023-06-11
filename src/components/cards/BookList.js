import { ArrowIcon } from "../../images/icons/customIcons";
import bookData from "../../data/data";

const BookList = ({content}) => {
    return(
        <div className="book-list flex justify-sb">
            <div className="book-list-inner flex v-center">
                <div className="book-list-image" style={{backgroundImage:`url(${content.image})`}}></div>
                <div className="book-list-details">
                    <h5 className="uppercase"> {content.title.substring(0 , 15)}<span className="opacity">...</span></h5>
                    <div className="book-list-genres flex">
                        {
                            content.genre.map((bookgenre , index) => (<div key={index} className={`filter-item ${bookData.genre[bookgenre]}-outline`}> {bookgenre.substring(0, 3)} </div>))
                        }
                    </div>
                </div>
            </div>
            <ArrowIcon />
        </div>
    );
}

export default BookList;