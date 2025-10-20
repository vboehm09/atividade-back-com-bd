//Lógica, tratativa de erros e regras de negocio

//importar o model
import * as PetModel from './../Models/petModel.js';

export const listarTodos = async (req, res) => {
    try {
        const pets = await PetModel.findAll();

        if (!pets || pets.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há pets na lista',
                pets
            })
            
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'Lista de pets',
            pets
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm= async (req, res) => {
    try {
        const id = req.params.id;
        const pet =  await PetModel.findById(id);

        if (!pet) {
            return res.status(404).json({
                erro: 'Pet não encontrado',
                mensagem: 'Verifique se o id do Pet existe',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'Pet encontrado',
            pet
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar pet por id',
            detalhes: error.message
        })
    }
}
