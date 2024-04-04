import Link from "next/link"

export default function Home() {
    return (
        <main>
            
            <h1>Página Principal</h1>
            <div>
                <Link href="/users">Ir para Users</Link>
            </div>
            <div>
                <Link href="/products">Ir para Products</Link>
            </div>
            <div>
                <Link href="/users/12345">Ir para UserID 12345</Link>
            </div>
        </main>
    )
}