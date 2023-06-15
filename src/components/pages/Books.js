import {StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";

const Books = () => {
    return(
        <div className="books-page-container">
            <div className={`section-title flex v-center justify-sb red`}>
                <div className="flex h-center"><div className="section-title-icon flex v-h-center"> <StackedBooksIcon /> </div> <h3> All Books </h3></div>
            </div>
            <div className="books-container flex flex-column">
                <BookPageCard />
                <BookPageCard />
                <BookPageCard />
                <BookPageCard />
            </div>
        </div>
    );
}


export default Books;