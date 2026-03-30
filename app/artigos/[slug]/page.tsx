import { getMateria, getMaterias } from "@/app/lib/api/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
    params : Promise<{
        slug: string;
    }>
}

export const generateMetadata = async({params} : Props) => {
    const {slug} = await params;
    const materia = await getMateria(slug);

    if (!materia) { return; }

    return {
        title: materia.titulo,
        description: materia.descricao
    }
}

const Materia = async ({params} : Props) => {
    const {slug} = await params;
    const materia = await getMateria(slug);
    
    console.log(slug)

    if (!materia) { return notFound() }

    return (
        <section className="container flex flex-col my-10 mx-auto p-8 bg-gray-200">
            <div className="flex">
                <img src="https://placehold.co/200x200" className="w-100 h-100" alt="imagem ilustrativa da matéria" />

                <div className="p-4">
                    <h1 className="text-4xl font-bold flex justify-center mb-4">{materia.titulo}</h1>
                    <p>{materia.descricao}</p>
                    <p className="mt-15"><b>Autor:</b> {materia.autor}</p>
                    <p><b>Data de publicação:</b> {materia.dataPublicacao}</p>
                </div>
            </div>

            <div className="my-25">
                <p>{materia.conteudo}</p>
                <p className="text-gray-600 mt-5">Aqui ficaria um conteudo maior e mais elaborado</p>
            </div>
        </section>
    )
}


export const generateStaticParams = async () => {
    const materias = await getMaterias();
    
    return materias.map((materia) => ({
        slug: materia.url
    }));
}

export default Materia