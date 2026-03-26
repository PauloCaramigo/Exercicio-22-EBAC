import Link from "next/link"

export const dynamic = "force-static";

export const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 py-2 bg-gray-200">
            <Link href="/"><h1 className="font-bold text-2xl">Recanto do Bardo</h1></Link>

            <nav>
                <ul className="flex gap-4">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/artigos">Matérias</Link></li>
                </ul>
            </nav>
        </header>
    )
}