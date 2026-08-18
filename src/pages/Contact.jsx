import { NavLink } from "react-router"

export default function Contact() {
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

                <NavLink to="/login"
                className="bg-amber-800 p-2 my-2 rounded-4xl text-center content-center">
                    Entrar
                </NavLink>
            </nav>

            <h1>Contato</h1><br />
        </>
    )
}