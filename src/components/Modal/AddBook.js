import { ArrowIcon, TimesIcon } from "../../images/icons/customIcons";
import { DataContext } from "../../App";
import { useContext, useState } from "react";

const AddBook = () => {

    const {modalType} = useContext(DataContext);
    const[genres , setGenres] = useState([]);

    function addGenre(el){
        if(el.key == "Enter"){
            let currentValue =  el.target.value;
            if(currentValue){
                setGenres([...genres , el.target.value])
                el.target.value = ""
            }
        }
    }

    function removeGenre(removeIndex){
        setGenres(genres.filter((genre , index) => index != removeIndex))
    }

    return(
        <>
            <form className="flex flex-column">
                <div className="input-block-container flex flex-column">
                    <label>Book Name</label>
                    <input type="text" placeholder="Whats the name of the book?"/>
                </div>
                <div className="input-block-container flex flex-column">
                    <label>Author</label>
                    <input type="text" placeholder="Who is the author?"/>
                </div>
                <div className="input-block-container flex flex-column">
                    <label>Image</label>
                    <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required/>
                </div>
                <div className="input-block-container flex flex-column" style={{minHeight:"40px"}}>
                    <label>Genres</label>
                    <div className="flex" style={{gap:"5px" , paddingTop:"10px" , flexWrap:"wrap"}}>{genres.map((genre , index) => <div key={index} className="tag fill flex v-center">{genre}<TimesIcon func={() => removeGenre(index)}/></div>)}<input className="p-static" type="text"  placeholder="Who is the author?" onKeyDown={addGenre}/></div>
                </div>
                <div className="input-block-container flex flex-column">
                    <label>Description</label>
                    {/* <input type="text" placeholder="Write a small description of the book"/> */}
                    <textarea type="text" placeholder="Write a small description of the book">
                    </textarea>
                </div>
            </form>
            <button className="red-button full-width"> <span className="uppercase"> Add Book </span>  <ArrowIcon /></button>
        </>
    )
}

export default AddBook;