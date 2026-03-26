import Card from "../componentes/CardMaterias/cardMaterias";
import { getMaterias } from "../lib/api/api";

export const dynamic = "force-static";

export default async function page() {
    const materias = await getMaterias();
    
    return (
        <section className="container mx-auto my-10"> 
            {materias.map(materia => <Card materia={materia} key={materia.id}/>)} 
        </section>
    )
}