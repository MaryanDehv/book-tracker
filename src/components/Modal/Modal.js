import { useContext } from "react";
import { DataContext } from "../../App";
import SectionTitle from "../headings/SectionTitle";
import { useSelector } from "react-redux";

const Modal = () => {
    const {modal} = useSelector(state => state.modal);
    
    return(
        <>
            <div className="modal-backdrop"></div>
            <div className="modal-container">
                <div className="modal-container-inner">
                    <SectionTitle modalPanel={true} icon={modal.icon} title={modal.title}/>
                    <div className="modal-container-content">
                        <modal.component props={modal._}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;