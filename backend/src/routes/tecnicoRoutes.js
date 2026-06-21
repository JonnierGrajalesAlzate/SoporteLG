import { Router } from "express";
import { getMisTicketsTecnico } from "../controllers/tecnicoController.js";

const router = Router();

router.get(
    "/mis-tickets/:tecnicoId",
    getMisTicketsTecnico
);

export default router;