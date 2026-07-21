import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

import parqueoRoutes from "./routes/parqueo.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
dotenv.config();

const NAME=process.env.SERVER_NAME;
const VERSION=process.env.SERVER_VERSION;
const DESCRIPTION=process.env.SERVER_DESCRIPTION;
const PORT=process.env.SERVER_PORT;
const COOKIE_SECRET=process.env.COOKIE_SECRET

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

app.get('/', (req, res) => {
  res.json({
    name: NAME,
    version: VERSION,
    description: DESCRIPTION,
    puerto: PORT
  });
});

app.use("/api/parqueo",parqueoRoutes);

app.use("/api/usuario",usuarioRoutes);

app.listen(PORT, () => {
    console.log(`${NAME} ${VERSION} ejecutandose en http://localhost:${PORT}`);
});