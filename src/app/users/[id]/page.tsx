import Link from "next/link";

export type UserProps = {
    params: {id: string},
    name: string;
}

export default function IdPage({ params, name }: UserProps) {
    return (
        <>
            <h1>Página do Id</h1>
            <p>Id: {params.id}</p>
            {name && <p>Nome: {name}</p>}

            <div>
                <Link href="/">Ir para Home</Link>
            </div>
        </>
    );
}