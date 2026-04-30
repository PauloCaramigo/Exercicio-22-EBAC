import Link from "next/link";
import { Materias } from '@/app/types/typeMateria';

type Props = {
    materia : Materias;
}

export default function Card({materia} : Props) {
    const {id, imgSrc, url, titulo, descricao} = materia

    return (
        <Link href={`/artigos/${url}/`}>
            <div className="bg-gray-200 p-8 my-10 flex border rounded-lg hover:scale-101">
                <img src={imgSrc} alt="" className="img-card" />

                <div className="ml-4">
                    <h1 className="text-2xl font-bold">{titulo}</h1>
                    <p>{descricao}</p>
                </div>
            </div>
        </Link>
    )
}