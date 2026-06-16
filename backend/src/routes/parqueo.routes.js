import { Router } from "express";
import { calcularCobro } from "../controllers/parqueo.controllers.js";

const router = Router();

router.post("/calcular", calcularCobro);

export default router;