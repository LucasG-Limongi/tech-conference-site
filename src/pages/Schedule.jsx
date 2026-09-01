import { useParams } from "react-router"

export default function Schedule() {
    const { dia } = useParams()

    return(
        <>
            <h1>Programação</h1>

            { dia && <p>{dia}</p> }
        </>
    )
}