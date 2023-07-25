import { useDispatch } from "react-redux";
import { ArrowIcon, TimesIcon } from "../../images/icons/customIcons";
import {selectedDate, toggleCalendar } from "../../redux/states/_addLog";


const Calendar = () => {
    const dispatch = useDispatch();
    return(
        <div className="calendar flex flex-column v-center">
            <div className="calendar-title flex justify-sb"> <div><h3> Select Date </h3><p> Track you reading day</p></div><TimesIcon func={() => dispatch(toggleCalendar("close"))}/></div>
            <div className="months flex v-center justify-sb"><ArrowIcon direction={"left"}/> <div><strong> March </strong> <span className="opacity">2023</span></div><ArrowIcon /> </div>
            <div className="weekdays flex v-center"> <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div>
            <div className="days flex">{[...Array(31)].map((day , index) => <div className="flex v-h-center" data-clickable="true" onClick={() => dispatch(selectedDate(index+1))}>{index + 1}</div>)}</div>
        </div>
    )
}

export default Calendar;