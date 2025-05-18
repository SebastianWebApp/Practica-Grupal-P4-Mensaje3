import express, {json} from "express";
import dotenv from "dotenv";
import path from "path";


//Permitimos la conceccion con el .env
dotenv.config();
const PORT = process.env.PORT;

//Iniciamos express
const app = express();


//Para que acepte json
app.use(json());

// Ruta raíz
app.get("/", (req, res) => {
    res.status(200).json({
            Estado: 200,
            Respuesta: "Servidor 3: digitalocean prueba 20",
        });
});



app.listen(PORT, () => {
    console.log(`Servidor Activo http://localhost:${PORT}`);
});
