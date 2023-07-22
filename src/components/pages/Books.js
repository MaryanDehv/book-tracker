import {FilterIcon, StackedBooksIcon } from "../../images/icons/customIcons";
import BookPageCard from "../cards/BookPageCard";
import SectionTitle from "../headings/SectionTitle";
import { useContext } from "react";
import { DataContext } from "../../App";
import EditBook from "../Modal/EditBook";
import { modalType } from "../../redux/states/_modal";
import { useDispatch } from "react-redux";
import FilterBooks from "../Modal/FilterBooks";


const Books = ({}) => {
    const {filteredBooks} = useContext(DataContext);

    const dispatch = useDispatch();

    function filter(){
        dispatch(modalType({component: FilterBooks , title: "Filter" , icon: FilterIcon}))
    }

    return(
        <div className="books-page-container">
            <SectionTitle title={{icon: StackedBooksIcon , name: "All Books"}} icon={FilterIcon} cb={filter}/>
            <div className="books-container flex flex-column">
                {
                  filteredBooks.variable.map((book , index) => (
                        <BookPageCard addModal={() => dispatch(modalType({component: EditBook , title: book.title , icon: false , _:book}))} key={index} content={book}/>
                    ))
                }
            </div>
        </div>
    );
}


export default Books;