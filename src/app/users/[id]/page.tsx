import Link from "next/link";

export default function IdPage({ params}: { params: {id: string} }) {
    return (
        <>
            <h1>Página do Id</h1>
            <p>Id: {params.id}</p>

            <div>
                <Link href="/">Ir para Home</Link>
            </div>
        </>
    );
}