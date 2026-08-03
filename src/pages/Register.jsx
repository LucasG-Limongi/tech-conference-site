import { NavLink } from "react-router"

export default function Register() {
    return (
        <>
            <h1>Cadastrar</h1><br />
            <NavLink to="/login">Login</NavLink><br />
            <NavLink to="/">Início</NavLink><br />
            <NavLink to="/contato">Contato</NavLink>
        </>
    )
}