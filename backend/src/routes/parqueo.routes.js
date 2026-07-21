import {Router} from "express";

import { calcularCobro } from "../controllers/parqueo.controller.js";
import { autenticarCookie } from "../middlewares/autenticarcookie.js";

const router = Router();

router.post('/calcular',autenticarCookie,calcularCobro);

export default router;