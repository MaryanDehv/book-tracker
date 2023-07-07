import { useContext } from "react";
import { DataContext } from "../App";
import SectionTitle from "./SectionTitle";

const Modal = () => {

    const {modalType} = useContext(DataContext)
    
    return(
        <div className="modal-container">
            <div className="modal-container-inner">
                <SectionTitle modalPanel={true} icon={modalType.variable.icon} title={modalType.variable.title}/>
                <div className="modal-container-content">
                    <modalType.variable.component props={modalType.variable._}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;