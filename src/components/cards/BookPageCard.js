import { BinIcon, EyeIcon, StarIcon } from "../../images/icons/customIcons";

const BookPageCard = ({content, addModal}) => {
    // onClick={addModal}
    return(
        <div className={`book-page-card flex justify-sb v-center ${content.status == "completed" ? 'green' : content.status == "list" ? 'purple' : 'red'}`} data-clickable="true">
            <div className="book-page-card-inner flex v-center">
                <div className="book-page-card-contents-container flex v-center">
                    <div className="flex details-container v-center">
                        <div className="image"><div>{content.progress}%</div></div>
                        <div className="details flex flex-column uppercase">
                            <p className="book-title"> {content.title} </p>
                            <div className="book-rating flex">
                                {
                                    content.status == "completed" ? [...Array(content.rating)].map(star => <StarIcon />) : <div className="status"> {content.status} </div>
                                }
                            </div>
                            <div><span className="author-tag opacity">author:</span> <span className="author-name">{content.author}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex options">
                <div data-clickable="true" className="more flex h-center" ><EyeIcon  func={addModal} /></div>
                <div data-clickable="true" className="more flex h-center" ><BinIcon /></div>
            </div>
        </div>
    );
}

export default BookPageCard;