import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 1234;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: "http://localhost:4200"
}))

app.get("/", (req,res) => {
    res.send("Servidor funcionando correctamente")
})

app.post("/template", (req,res) => {
    try {
        const datos = req.body;

        if (datos.usuario == undefined && datos.correo == undefined && datos.secreto == undefined) {
            res.status(400);
            res.send("Objeto vacio !!!")
        }else {
            res.json({...datos, msgServidor: "Datos obtenidos correctamente"});
        }

    }catch(error) {
        console.error("No se encontraron datos recibidos, ", error);
        res.send("No enviaste ningun dato");
    }
})

app.post("/reactivo", (req,res) => {
    try {
        const datos = req.body

        if (datos.name == undefined && datos.email == undefined && datos.contra == undefined) {
            res.status(400);
            res.send("Objeto vacio !!!")
        }else {
            res.json({...datos, msgServidor: "Datos obtenidos correctamente"});
        }

    }catch(error) {
        console.error("No se encontraron datos recibidos, ", error);
        res.send("No enviaste ningun dato");
    }

})

app.listen(port, ()=> {
    console.log(`Backend funcionando por el puerto: ${port}`);
})