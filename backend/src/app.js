import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); //se puede rellenar con el nombre del .env por ejemplo (".env.db")

const NAME = process.env.SERVER_NAME;
const VERSION = process.env.SERVER_VERSION;
const DESCRIPTION = process.env.SERVER_DESCRIPTION;
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: NAME,
    version: VERSION,
    description: DESCRIPTION,
    port: PORT,
  });
});

app.post("/api/parqueo/calcular", (req, res) => {
  const { placa, tipo, horas, minutos } = req.body; //esto desestructura el json, aca tambien puede hacerse de otra manera

if (!placa || placa.trim() === "") {
   res.status(400).json({ error: "La placa es requerida" });
}
if (!tipo || (tipo !== "carro" && tipo !== "moto")) {
 res.status(400).json({ error: "El tipo de vehículo no es válido" });
}

if(Number.isNaN(horas) || horas < 0) {
  res.status(400).json({ error: "Las horas deben ser un valor numérico positivo" });
}

if(Number.isNaN(minutos) || minutos < 0  || minutos > 59) {
  res
    .status(400)
    .json({ error: "Los minutos deben ser un valor numérico entre 0 y 59" });
}

const tarifa = tipo === "carro" ? 1200 : 500;

let h=Number(horas)
let m=Number(minutos)

if (m>5) h++;
const total = h * tarifa;

res.json({ 
  placa: placa, 
  tipo: tipo, 
  tarifa: tarifa,
  tiempoUso : horas+":"+minutos,
  horasCobradas: h, 
  total });
  
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
