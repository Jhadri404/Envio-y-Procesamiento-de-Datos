import {Router} from "express";

import { 
    agregarUsuario,
    listarUsuarios,
    buscarUsuario,
    eliminarUsuario,
    cambiarContrasena,
    autenticar
 } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/',listarUsuarios);
router.get('/:id',buscarUsuario);
router.post('/',agregarUsuario);
router.delete('/:id',eliminarUsuario);
router.patch('/',cambiarContrasena);
router.post('/autenticar',autenticar);


export default router;