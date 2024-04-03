/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default function ProductPage() {
    return (
        <div>
            <header>
                <div>
                    <h1>Página três - pasta products</h1>
                </div>
                <div>
                    <Link href="/">Ir para Home</Link>
                </div>               
            </header>

            <main>
                <h2>Jogo de futebol</h2>                
                <img src="/img-soccer.png" alt="jogo futebol" />
            </main>

            <footer>
                <p>Rodapé da página</p>
            </footer>
        </div>
    );
}