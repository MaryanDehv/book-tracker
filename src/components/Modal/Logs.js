import { dataObject } from "../../functions/_helper";

const Logs = ({props}) => {
    return(
        <div className="logs-container flex flex-column">
            {
                props.map(log => (
                <div className="logged-entry flex">
                    <div className="logged-entry-content"> 
                        {log.content}
                    </div>                
                    <div className="logged-entry-date flex flex-column h-center">
                        <div className="logged-entry-day">{log.date.day}</div>
                        <div className="uppercase logged-entry-month">{log.date.month.substring(0,3)}</div>
                    </div>
                </div>
                ))
            }
        </div>
    );
}


export default Logs;