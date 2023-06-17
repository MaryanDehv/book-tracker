import Grid from "../../utils/Grid"
import { DataContext } from "../../App"
import { useContext } from "react"

const Home = () => {
    const {gridLayout , selectedWidth} = useContext(DataContext)

    return(
        <Grid content={gridLayout.variable} setWidth={selectedWidth.set} />
    )
}

export default Home