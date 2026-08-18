import { NavLink } from "react-router"

function navLinkClass({ isActive }) {
    return isActive ? "text-accent bg-amber-800 p-2 my-2 rounded-4xl text-center content-center font-bold" : "bg-amber-800 p-2 my-2 rounded-4xl text-center content-center"
}

export default function Header() {
    return (
        <header>
            <nav className="flex flex-row justify-around">
                <NavLink to="/" className={navLinkClass}>
                    Início
                </NavLink>

                <NavLink to="/contato" className={navLinkClass}>
                    Contato
                </NavLink>

                <NavLink to="/login" className={navLinkClass}>
                    Entrar
                </NavLink>
            </nav>
        </header>
    )
}