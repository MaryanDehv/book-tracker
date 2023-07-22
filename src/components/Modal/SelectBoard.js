import { useDispatch, useSelector } from "react-redux";
import { toggleAddBoard } from "../../redux/states/_dashboard";

const SelectBoard = () => {
    const {boardOptions} = useSelector(state => state.dashboard);
    const dispatch = useDispatch()
    
    return(
        <div className="select-board grid-item flex">
            {
                boardOptions.map((option) => (<div className="flex v-h-center" data-clickable="true" onClick={() => dispatch(toggleAddBoard("close"))}><span>{option.toUpperCase()}</span></div>))
            }
        </div>
    )
}

export default SelectBoard;