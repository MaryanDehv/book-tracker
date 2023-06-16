import { ArrowIcon } from "../images/icons/customIcons";

const AddBook = () => {
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