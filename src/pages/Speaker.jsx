import { useParams } from "react-router";

export default function Speaker() {
    const { slug } = useParams()

    return(
        <>
            <h1>Palestrantes</h1>
            <p>{slug}</p>
        </>
    )
}