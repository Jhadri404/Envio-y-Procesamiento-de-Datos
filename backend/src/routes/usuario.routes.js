import {Router} from "express";

import { 
    agregarUsuario,
    listarUsuarios,
    buscarUsuario,
    eliminarUsuario,
    cambiarContrasena,
    autenticar,
    obtenerSession,
    cerrarSesion
   //  obtenerUsuarioAutenticado,
   //  cerrarSesionCookie
 } from "../controllers/usuario.controller.js";

 import{
    autenticarCookie
 }from "../middlewares/autenticarcookie.js"

 import { autenticarSession 
 } from "../middlewares/autenticarSession.js";

const router = Router();

router.post('/autenticar',autenticar);
router.get('/auteticado',autenticarSession,obtenerSession);
router.post('/cerrar-sesion',cerrarSesion)

router.get('/',listarUsuarios);
router.get('/:id',buscarUsuario);
router.post('/',agregarUsuario);
router.delete('/:id',eliminarUsuario);
router.patch('/',cambiarContrasena);

// router.post('/autenticar',autenticar);
// router.get('/auteticado',autenticarCookie,obtenerUsuarioAutenticado);
// router.post('/cerrar-sesion',cerrarSesionCookie)


export default router;