import { AddIcon, ArrowIcon, StarIcon } from "../../images/icons/customIcons";
import { toggleCalendar } from "../../redux/states/_addLog";
import LineChart from "../charts/LineChart";
import { useDispatch, useSelector} from "react-redux";
import AddLog from "../utils/AddLog";
import { modalType } from "../../redux/states/_modal";
import Logs from "./Logs";

const EditBook = ({props}) => {
    const dispatch = useDispatch()
    const {calendar} = useSelector(state => state.log)
    
    return(
        <div className="edit-book">
            <div className="edit-book-contents"> 
                <div className="edit-book-contents-progress">
                    <div className="heading flex justify-sb"><h4> progress </h4><span data-clickable="true"> Edit</span></div>
                    <p> {props.progress}% </p>
                </div>
                <div className="edit-book-contents-description">
                <div className="heading flex justify-sb"><h4> Description </h4><span data-clickable="true"> Edit</span></div>
                <p>
                {props.description}
                </p>
                </div>
                <div className="edit-book-contents-status">
                    <div className="heading flex justify-sb"><h4> Status </h4><span data-clickable="true"> Edit</span></div>
                    <p> {props.status} </p>
                </div>
                    <div className="edit-book-contents-rating">
                        <div className="heading flex justify-sb"> <h4> rating </h4><span data-clickable="true"> Edit</span> </div>
                        {props.rating ? [...Array(props.rating)].map(star => <StarIcon />) : <p> N/A </p>}
                    </div>
            </div>
            {
                ["completed" , "ongoing"].some(status => status == props.status) ?
                <>
                <div className="edit-book-analytics">
                    <div className="edit-book-analytics-title flex justify-sb"> <p> Reading Times </p> <AddIcon func={() => dispatch(toggleCalendar("open"))}/></div>
                    <div className="edit-book-analytics-chart">
                        <LineChart chartValues={props.readingtime}/>
                    </div>
                </div>
                <button data-clickable="true" className="edit-book-analytics-view-logs uppercase red-button full-width" onClick={() => dispatch(modalType({component: Logs , title: props.title , icon: false , _:props}))}> View logs <ArrowIcon /></button>
                </> :
                ""
            }
            {calendar ? <AddLog /> : ""}

        </div>
    );
}

export default EditBook;