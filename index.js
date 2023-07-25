const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

//Configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuración de BD
const uri = `mongodb+srv://apiuser:GPdiXaPh4a2igQNR@cluster0.fccbtdj.mongodb.net/materias?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la BD.");
  })
  .catch((error) => {
    console.log("Se presentó error: " + error);
  });

//Importación de rutas
const authRoutes = require("./routes/auth");

//Declaración de middlewares
app.use("/api/user", authRoutes);

app.get("/api", (req, res) => {
  res.json({
    message: "Conexión exitosa desde el index.",
  });
});

//Lanzamiento el servidor
const PORT = 3005;
app.listen(PORT, () => {
  console.log("Servidor a su servicio en el puerto, " + PORT);
});
