import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <nav className="flex flex-row justify-around">
                <NavLink to="/"
                className={({isActive}) => ( isActive ?
                "text-accent bg-amber-800 p-2 my-2 rounded-4xl text-center content-center"
                : "bg-amber-800 p-2 my-2 rounded-4xl text-center content-center"
                )}>
                    Início
                </NavLink>

                <NavLink to="/contato"
                className={({isActive}) => ( isActive ?
                "text-accent bg-amber-800 p-2 my-2 rounded-4xl text-center content-center"
                : "bg-amber-800 p-2 my-2 rounded-4xl text-center content-center")}>
                    Contato
                </NavLink>
            </nav>

            <h1>Início</h1><br />
        </>
    )
}