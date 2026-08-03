import { NavLink } from "react-router"

export default function Home() {
    return (
        <>
            <h1>Início</h1><br />
            <NavLink to="/contato">Contato</NavLink><br />
            <NavLink to="/login">Login</NavLink><br />
            <NavLink to="/cadastro">Cadastro</NavLink>
        </>
    )
}