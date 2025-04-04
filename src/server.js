import express from "express";
import cors from "cors";
import dramaRoutes from "./routes/dramaRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(dramaRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
