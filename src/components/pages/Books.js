import {AddIcon, StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";
import SectionTitle from "../SectionTitle";
import { useContext } from "react";
import { DataContext } from "../../App";
import { setModal} from "../../functions/_helper";
import EditBook from "../EditBook";

const Books = ({}) => {
    const {filteredBooks , modalType} = useContext(DataContext);

    return(
        <div className="books-page-container">
            <SectionTitle icon={StackedBooksIcon} title={"All Books"} filter={true}/>
            <div className="books-container flex flex-column">
                {
                  filteredBooks.variable.map((book , index) => (
                        <BookPageCard addModal={() => setModal(modalType , EditBook , book.title , false , book)} key={index} name={book.title} rating={book.rating} category={book.status} progress={book.progress} author={book.author}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Books;