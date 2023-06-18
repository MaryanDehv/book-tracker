import {StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";
import bookData from "../../data/data";
import SectionTitle from "../SectionTitle";
import { useContext } from "react";
import { DataContext } from "../../App";

const Books = ({}) => {
    const {modal} = useContext(DataContext)
    return(
        <div className="books-page-container">
            <SectionTitle icon={StackedBooksIcon} toggleModal={modal} title={"All Books"} filter={true}/>
            <div className="books-container flex flex-column">
                {
                    bookData.books.map((book , index) => (
                        <BookPageCard key={index} name={book.title} category={book.status} progress={book.progress} author={book.author}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Books;