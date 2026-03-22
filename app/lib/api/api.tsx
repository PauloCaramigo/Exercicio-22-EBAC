import { materias } from '@/app/lib/materias';

//Estou usando um arquivo local, mas daria para colocar aqui uma lógica para usar uma API no lugar

export async function getMaterias() {
    return materias;
}

export async function getMateria(id: number) {
    return materias.find(materia => materia.id === Number(id))
}