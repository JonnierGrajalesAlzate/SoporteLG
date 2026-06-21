import { Router } from "express";
import {
    getDashboard,
    getUltimosTickets,
    TodosTickets
} from "../controllers/dashboardController.js";
const router = Router();

router.get(
    "/ultimos-tickets/:usuarioId",
    getUltimosTickets
);

router.get(
    "/todos-tickets/:usuarioId",
    TodosTickets
);

router.get(
    "/:usuario_id",
    getDashboard
);


export default router;