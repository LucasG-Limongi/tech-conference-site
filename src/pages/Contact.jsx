import { NavLink } from "react-router"

export default function Contact() {
    return (
        <>
            <h1>Contato</h1><br />
            <NavLink to="/">Início</NavLink><br />
            <NavLink to="/login">Login</NavLink><br />
            <NavLink to="/cadastro">Cadastro</NavLink>
        </>
    )
}