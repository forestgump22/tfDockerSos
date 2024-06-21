const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

// Middleware para analizar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });

// Rutas
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
