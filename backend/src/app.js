import express from "express"
import dotenv from "dotenv"

dotenv.config(); //se puede rellenar con el nombre del .env por ejemplo (".env.db")

const NAME=process.env.SERVER_NAME;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;
const PORT=process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Nombre del server: ${NAME}</h1><p>${DESCRIPTION}</p><p>Escuchando en el puerto: ${PORT}</p><p>Version: ${VERSION}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

