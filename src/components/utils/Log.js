import { useDispatch, useSelector } from "react-redux";
import { ArrowIcon } from "../../images/icons/customIcons";
import { selectedDate } from "../../redux/states/_addLog";

const Log = () => {
    const dispatch = useDispatch()
    const {date} = useSelector(state => state.log)
    return(
        <div className="log flex flex-column">
            <div className="back-to-calendar" data-clickable="true" onClick={() => dispatch(selectedDate(false))}>back</div>
            <div className="logging-date flex flex-column">
                <span>Date</span>
                <p> March {date}, 2023</p>
            </div>
            <div className="time-logged">
                <div className="flex input-block-container">
                    <input type="text" /><span>hr</span>
                </div>
            </div>
            <div className="log-note input-block-container">
                <textarea>
                </textarea>
            </div>
            <button data-clickable="true" className="edit-book-analytics-view-logs uppercase red-button full-width"> Save Entry <ArrowIcon /></button>

        </div>
    );
}

export default Log;