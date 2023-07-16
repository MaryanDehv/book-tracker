import Grid from "../utils/Grid"
import { DataContext } from "../../App"
import { useContext } from "react"
import { useSelector } from "react-redux"

const Home = () => {
    const {gridLayout , selectedWidth} = useContext(DataContext)
    const {boardLayout} = useSelector(state => state.dashboard)

    return(
        <Grid content={boardLayout} />
    )
}

export default Home