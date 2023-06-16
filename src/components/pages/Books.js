import {StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";
import bookData from "../../data/data";
import SectionTitle from "../SectionTitle";
import { useOutletContext } from "react-router-dom";

const Books = ({}) => {
    const[modal , setModal] = useOutletContext()
    return(
        <div className="books-page-container">
            <SectionTitle icon={StackedBooksIcon} toggleModal={{data: modal , func: setModal}} title={"All Books"} filter={true}/>
            <div className="books-container flex flex-column">
                {
                    bookData.books.map(book => (
                        <BookPageCard category={book.status} progress={book.progress} author={book.author}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Books;