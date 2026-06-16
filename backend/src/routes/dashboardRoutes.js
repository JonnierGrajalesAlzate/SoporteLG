import { Router } from "express";
import { getDashboard } from "../controllers/dashboardController.js";

const router = Router();

router.get("/:usuario_id", getDashboard);

export default router;