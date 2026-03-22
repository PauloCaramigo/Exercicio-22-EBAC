import { getMateria } from "@/app/lib/api/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
    params : Promise<{
        id: number;
    }>
}

export const generateMetadata = async({params} : Props) => {
    const {id} = await params;
    const materia = await getMateria(id);

    if (!materia) { return; }

    return {
        title: materia.titulo,
        description: materia.descricao
    }
}

const Materia = async ({params} : Props) => {
    const {id} = await params;
    const materia = await getMateria(id);

    if (!materia) { return notFound() }

    return (
        <section className="container flex my-10 mx-auto p-8 bg-gray-200">
            <img src="https://placehold.co/200x200" className="w-100 h-100" alt="imagem ilustrativa da matéria" />

            <div className="p-4">
                <h1 className="text-4xl font-bold flex justify-center mb-4">{materia.titulo}</h1>
                <p>{materia.descricao}</p>
            </div>
        </section>
    )
}

export default Materia