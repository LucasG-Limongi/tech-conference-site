import { NavLink } from "react-router"

export default function Login() {
    return (
        <>
            <h1>Entrar</h1><br />
            <NavLink to="/contato">Contato</NavLink><br />
            <NavLink to="/">Início</NavLink><br />
            <NavLink to="/cadastro">Cadastro</NavLink>
        </>
    )
}