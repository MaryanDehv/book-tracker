import { ArrowIcon } from "../../images/icons/customIcons";

const Calendar = () => {
    return(
        <div className="calendar flex flex-column v-center">
            <div className="months flex v-center justify-sb"><ArrowIcon /> March 2023 <ArrowIcon /> </div>
            <div className="weekdays flex v-center"> <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div>
            <div className="days flex">{[...Array(31)].map((day , index) => <div className="flex v-h-center" data-clickable="true">{index + 1}</div>)}</div>
        </div>
    )
}

export default Calendar;