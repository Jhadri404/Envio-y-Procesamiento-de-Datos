import {Router} from "express";

import { 
    agregarUsuario,
    listarUsuarios,
    buscarUsuario,
    eliminarUsuario,
    cambiarContrasena,
    autenticar,
    obtenerUsuarioAutenticado,
    cerrarSesionCookie
 } from "../controllers/usuario.controller.js";

 import{
    autenticarCookie
 }from "../middlewares/autenticarcookie.js"

const router = Router();

router.get('/',listarUsuarios);
router.get('/:id',buscarUsuario);
router.post('/',agregarUsuario);
router.delete('/:id',eliminarUsuario);
router.patch('/',cambiarContrasena);

router.post('/autenticar',autenticar);
router.get('/auteticado',autenticarCookie,obtenerUsuarioAutenticado);
router.post('/cerrar-sesion',cerrarSesionCookie)


export default router;