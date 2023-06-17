import { AddIcon } from "../images/icons/customIcons";
import SectionTitle from "./SectionTitle";

const Modal = ({modalType: ModalType}) => {
    return(
        <div className="modal-container">
            <div className="modal-container-inner">
                <SectionTitle modalPanel={true} icon={AddIcon} title={"Add Book"}/>
                <div className="modal-container-content">
                    <ModalType.component />
                </div>
            </div>
        </div>
    )
}

export default Modal;