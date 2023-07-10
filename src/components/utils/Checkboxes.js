import { check , dataObject} from "../../functions/_helper";
import { CheckMark } from "../../images/icons/customIcons";

const Checkboxes = ({contents , groupName}) => {
    return(
        <>
            {
                contents.variable.map((tag , index) => (
                    <div key={index} className={`check flex v-center ${tag.checked ? 'checked' : ''}`} data-clickable="true" onClick={(el) => check(tag.name , contents)} data-check={tag.checked}>
                        <div className={dataObject('config')[groupName].colors[tag.name]}>
                            <CheckMark />
                        </div>
                        <p> {tag.name} </p>
                    </div>
                ))
            }
        </>
    )
}

export default Checkboxes;