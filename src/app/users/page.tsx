/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <header>
                <div>            
                    <h1>Página Principal</h1>
                </div>
                <div>
                    <Link href="/users/12345">Ir para UserID 12345</Link>
                </div>
                <div>
                    <Link href="/products">Ir para Products</Link>
                </div>
                <div>
                    <Link href="/">Ir para Home</Link>
                </div>
            </header>
        
            <main>
                <img src="/img-stadium.png" alt="Estádio para jogo de futebol" /> 
            </main>

            <footer>
                <p>Estádio de Futebol</p>
            </footer>
        </div>
    );
};


