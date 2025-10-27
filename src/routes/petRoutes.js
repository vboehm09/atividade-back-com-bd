import { Router } from "express";
import * as PetController from '../controllers/petController.js'

const router = Router();

//Rota GetAll em /
router.get("/", PetController.listarTodos)
//Rota GetById em /:id
router.get("/:id", PetController.listarUm)
//Rota Create
router.post("/", PetController.criar);
//Rota Delete
router.delete("/id", PetController.apagar)
//Rota Update
router.put("/:id", PetController.atualizar)


export default router;