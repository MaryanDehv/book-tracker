import {dataObject} from "../../functions/_helper";

const SectionTitle = ({title , icon: Icon , cb}) => {
    return(
        <div className={`section-title full-width flex v-center justify-sb ${dataObject('config').status.colors[title] ? dataObject('config').status.colors[title] : "red"}`}>
            <div className="flex v-center" style={{gap:"5px"}}>
            {title.icon ?  <div className={`section-title-icon flex v-h-center`}> 
                <title.icon /> </div>  : ""} <h3> {title.name} </h3>
            </div>
            <div className="flex v-center" style={{gap:"5px"}}>
                <div className="flex" style={{gap:"5px"}}></div>
                {
                    Icon ? <Icon func={cb}/> : ""
                }
            </div>
        </div>
    )
}

export default SectionTitle;
 