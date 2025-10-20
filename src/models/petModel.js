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