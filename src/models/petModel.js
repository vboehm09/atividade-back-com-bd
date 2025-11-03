//é no models que fazemos a consulta para o banco de dados 
//ex: SELECT * FROM pets; porém estamos usando o PRISMA 
//que abstrai o comando SQL

//Importar o prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Crio a variavel findAll e já exporto
export const findAll = async () => {
    //SELECT * FROM pets = findMany
    return await prisma.pet.findMany({
        orderBy: { nome: 'asc' }
    })
}

//Crio a variavel findById e já exporto
export const findById = async (id) => {
    //SELECT * FROM pets WHERE id = {id} = findUnique
    return await prisma.pet.findUnique({
        where: { id: Number(id) }
    })
}   

export const criar = async (data) => {
    return await prisma.pet.create({
        data: {
            nome: data.nome,
            especie: data.especie,
            idade: data.idade,
            dono: data.dono

        }
    })
}

export const deletePet = async (id) => {
    return await prisma.pet.delete({
        where: { id: Number(id) }
    })
}

export const update = async (id, data) => {
    return await prisma.pet.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.especie && { especie: data.especie }),
            ...(data.idade && { idade: data.idade }),
            ...(data.dono && { dono: data.dono }),
            ...(data.anoMatricula && { anoMatricula: Number(data.anoMatricula) }),
        }
    })
}