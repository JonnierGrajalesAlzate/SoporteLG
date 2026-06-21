import { Router } from "express";
import { crearTicket } from "../controllers/ticketController.js";

const router = Router();

router.post("/", crearTicket);

export default router;