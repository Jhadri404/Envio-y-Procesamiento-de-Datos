import {Router} from "express";

import { calcularCobro } from "../controllers/parqueo.controller.js";
import { autenticarSesion } from "../middlewares/autenticarSession.js";
// import { autenticarCookie } from "../middlewares/autenticarcookie.js";

const router = Router();

router.post('/calcular',autenticarSesion,calcularCobro);
// router.post('/calcular',autenticarCookie,calcularCobro);

export default router;