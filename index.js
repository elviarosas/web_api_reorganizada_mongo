const express = require("express");
const app = express();

//para seguridad y poder obtener los datos del form de la página web
const cors = require("cors");
app.use(cors());
//para manejo e intercambio de informaicón en formato json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//para información estática
app.use(express.static("public"));

//agrega las variables de ambiente
const dotenv = require("dotenv");
dotenv.config();
//obtiene el puerto de la variable de ambiente
const port = process.env.PORT || 3000;

// database
require("./database.js");

app.get("/", (req, res) => {
  res.send("Pagina Principal Api");
});

app.use("/expos/", require("./routes/expos.routes.js"));

app.get("/ejemplo", (req, res) => {
  res.json({
    name: "Ambientes Totales",
    author: "Sofia",
    descripcion: "descripcion",
  });
});

app.listen(port, () => {
  console.log("Escuchando del puerto " + port);
});
