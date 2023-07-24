import { useSelector } from "react-redux";
import Calendar from "./Calendar";
import Log from "./Log";

const AddLog = () => {
    const {date} = useSelector(state => state.log)
    console.log(date)

    return(
        <div className="add_log">
            {date ? <Log /> : <Calendar />}
        </div>
    );
}

export default AddLog;