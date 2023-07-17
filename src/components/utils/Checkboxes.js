import { useDispatch } from "react-redux";
import {dataObject} from "../../functions/_helper";
import { CheckMark } from "../../images/icons/customIcons";

const Checkboxes = ({contents , check ,  groupName}) => {
    const dispatch = useDispatch()

    return(
        <>
            {
                contents.map((tag , index) => (
                    <div key={index} className={`check flex v-center ${tag.checked ? 'checked' : ''}`} data-clickable="true" onClick={(el) => dispatch(check({name: tag.name , update: groupName}))}  data-check={tag.checked}>
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