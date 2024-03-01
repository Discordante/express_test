import express from "express";
import eventsRouter from "./routers/event.router.js";
import pool from "./config/database/mysql.js";

// 🚀 Inicializar la aplicación Express
const app = express();
const port = process.env.PORT || 3000;

// 🛠️ Middlewares
app.use(express.json());

// 🗂️ Routers
app.use("/events", eventsRouter);

// 🌐 Verificar la conexión a la base de datos antes de iniciar el servidor
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Conexión a la base de datos establecida correctamente.");
    connection.release(); // Libera la conexión

    // 🌐 Iniciar el servidor solo si la conexión a la base de datos es correcta
    app.listen(port, () => {
      console.log(
        `🚀 Server running on port ${port} in ${process.env.NODE_ENV}`
      );
    });
  })
  .catch((err) => {
    console.error(
      "❌ No se pudo establecer la conexión a la base de datos:",
      err
    );
    process.exit(1);
  });
