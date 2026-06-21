import express from "express";
import cors from "cors";
import tecnicoRoutes from "./routes/tecnicoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import catalogosRoutes from "./routes/catalogosRoutes.js";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
import dashboardRoutes from "./routes/dashboardRoutes.js";

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/catalogos", catalogosRoutes);
app.use("/api/tecnico", tecnicoRoutes);
export default app;