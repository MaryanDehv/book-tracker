import SectionTitle from "../headings/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import {TimesIcon } from "../../images/icons/customIcons";
import { closeModal } from "../../redux/states/_modal";

const Modal = () => {
    const {modal} = useSelector(state => state.modal);
    const dispatch = useDispatch()

    return(
        <>
            <div className="modal-backdrop"></div>
            <div className="modal-container">
                <div className="modal-container-inner">
                    <SectionTitle title={{icon: modal.icon , name: modal.title }} icon={TimesIcon} cb={() => dispatch(closeModal())}/>
                    <div className="modal-container-content">
                        <modal.component props={modal._}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;