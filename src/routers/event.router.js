import { Router } from "express";
import {
  listEvents,
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

const router = Router();

router.get("/", listEvents); // Listar todos los eventos
router.post("/", createEvent); // Crear un nuevo evento
router.get("/:id", getEvent); // Obtener un evento específico por id
router.put("/:id", updateEvent); // Actualizar un evento por id
router.delete("/:id", deleteEvent); // Eliminar un evento por id

export default router;
