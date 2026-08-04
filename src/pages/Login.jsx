import { Link } from "react-router"

export default function Login() {
    return (
        <>
            <h1>Entrar</h1><br />

            <p>
                Ainda não possui uma conta?<br/>
                <Link to="/cadastro">Cadastrar</Link>
            </p>
        </>
    )
}