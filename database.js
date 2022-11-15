const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Base Datos Conexión Exitosa");
  })
  .catch((err) => {
    console.log("Error Contactando a BD");
  });
