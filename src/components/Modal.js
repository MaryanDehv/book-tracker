import { AddIcon } from "../images/icons/customIcons";
import AddBook from "./AddBook";
import SectionTitle from "./SectionTitle";

const Modal = ({toggleModal}) => {
    return(
        <div className="modal-container">
            <div className="modal-container-inner">
                <SectionTitle modal={true} toggleModal={toggleModal} icon={AddIcon} title={"Add Book"}/>
                <div className="modal-container-content">
                    <AddBook />
                </div>
            </div>
        </div>
    )
}

export default Modal;