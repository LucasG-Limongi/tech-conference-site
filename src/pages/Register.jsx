import { Link, useNavigate } from "react-router"

export default function Register() {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate('/login')
    }

    return (
        <>
            <h1>Cadastrar</h1><br />

            <form onSubmit={handleSubmit}>
                {/* nome */}
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" />
            
                {/* email */}
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" />
            
                {/* senha */}
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" />

                {/* confirmar senha */}
                <label htmlFor="confirm">Confirmar senha</label>
                <input type="password" id="confirm" name="confirm" />
                <br />

                {/* demais campos: e-mail, senha e confirmar senha */}
                <button type="submit">Cadastrar</button>
            </form><br />

            <p>
                Já possui uma conta?<br/>
                <Link to="/login">Faça o login</Link>
            </p>
        </>
    )
}