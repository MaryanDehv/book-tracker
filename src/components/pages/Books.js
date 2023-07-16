import {StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";
import SectionTitle from "../headings/SectionTitle";
import { useContext } from "react";
import { DataContext } from "../../App";
import EditBook from "../Modal/EditBook";
import { modalType } from "../../redux/states/_modal";
import { useDispatch } from "react-redux";


const Books = ({}) => {
    const {filteredBooks} = useContext(DataContext);

    const dispatch = useDispatch(state => state.modal)

    return(
        <div className="books-page-container">
            <SectionTitle icon={StackedBooksIcon} title={"All Books"} filter={true}/>
            <div className="books-container flex flex-column">
                {
                  filteredBooks.variable.map((book , index) => (
                        <BookPageCard addModal={() => dispatch(modalType({component: EditBook , title: book.title , icon: false , _:book}))} key={index} name={book.title} rating={book.rating} category={book.status} progress={book.progress} author={book.author}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Books;