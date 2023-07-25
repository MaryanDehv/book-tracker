import { useDispatch, useSelector } from "react-redux";
import { ArrowIcon, TimesIcon } from "../../images/icons/customIcons";
import { selectedDate, toggleCalendar , saveEntry} from "../../redux/states/_addLog";

const Log = () => {
    const dispatch = useDispatch()
    const {date} = useSelector(state => state.log)
    return(
        <div className="log flex flex-column">
            <div className="flex justify-sb v-center">
                <div className="back-to-calendar" data-clickable="true" onClick={() => dispatch(selectedDate(false))}><ArrowIcon direction={"left"}/></div>
                <TimesIcon />
            </div>
            <div className="logging-date flex flex-column">
                <span>Date</span>
                <p> March {date}, 2023</p>
            </div>
            <div className="time-logged">
                <div className="flex input-block-container">
                    <input type="text" /><span className="opacity">hr</span>
                </div>
            </div>
            <div className="log-note input-block-container">
                <textarea></textarea>
            </div>
            <button data-clickable="true" className="edit-book-analytics-view-logs uppercase red-button full-width" onClick={() => dispatch(saveEntry())}> Save Entry <ArrowIcon /></button>

        </div>
    );
}

export default Log;