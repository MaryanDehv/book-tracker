import { StarIcon } from "../../images/icons/customIcons";

const BookPageCard = ({category , progress , author}) => {
    return(
        <div className="book-page-card flex justify-sb v-center">
            <div className="book-page-card-inner flex v-center">
                <div className={`book-page-card-category-indicator ${category == "completed" ? 'green' : category == "list" ? 'purple' : 'red'}`}></div>
                <div className="book-page-card-contents-container flex v-center">
                    <div className="flex details-container v-center">
                        <div className="image"></div>
                        <div className="details flex flex-column uppercase">
                            <p className="book-title"> Some book title </p>
                            <div><StarIcon /> <StarIcon /></div>
                            <div><span className="author-tag opacity">author:</span> <span className="author-name">{author}</span></div>
                        </div>
                    </div>
                    <div className="book-page-card-contents-progress flex flex-column v-center">
                        <div><span className="percentage-amount">{progress}</span><span className="percent-sign">%</span></div>
                        <p className="opacity"> completion </p>
                    </div>
                </div>
            </div>
            <div className="more flex h-center" ><div></div><div></div><div></div></div>
        </div>
    );
}

export default BookPageCard;