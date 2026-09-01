import { useSearchParams } from 'react-router'

export default function Speakers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const nome = searchParams.get('nome') || ''
    const empresa = searchParams.get('empresa') || ''

    return (
        <>
            <h1>Palestrantes</h1>

            <input type="text" placeholder="Nome do palestrante" value={nome}
            onChange={(event) =>
                setSearchParams({ nome: event.target.value, empresa }, { replace: true })
            }/>

            <input type="text" placeholder="empresa" value={empresa}
            onChange={(event) =>
                setSearchParams({ nome, empresa: event.target.value }, { replace: true })
            }/>

            {nome && <p>{nome}</p>}
            {empresa && <p>{empresa}</p>}
        </>
    )
}