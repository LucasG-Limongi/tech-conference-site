import { Link } from "react-router"

export default function Login() {
    return (
        <>
            <h1 className="text-emerald-500">Entrar</h1><br />

            <p>
                Ainda não possui uma conta?<br/>
                <Link to="/cadastro" className="text-accent">Cadastrar</Link>
            </p>
        </>
    )
}