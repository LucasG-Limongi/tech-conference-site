import { Link, useNavigate } from "react-router"

export default function Login() {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate('/')
    }

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-emerald-500 text-3xl">Entrar</h1><br />

                <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="flex flex-col">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email"
                        className="bg-blue-400 rounded
                        shadow-purple-300"/>
                    </div>
                
                    {/* senha */}
                    <div className="flex flex-col">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password"    name="password"
                        className="bg-blue-400 rounded
                        shadow-purple-300"/>
                    </div><br />

                    <button type="submit" className="bg-amber-800 px-3 py-1 rounded-sm hover:scale-110 transition-all">Entrar</button>
                </form><br />

                <p>
                    Ainda não possui uma conta?<br/>
                    <Link to="/cadastro" className="text-accent">Cadastrar</Link>
                </p>
            </div>
        </>
    )
}