import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Ayuda from "../pages/Ayuda";
import Configuracion from "../pages/Configuracion";
import Tickets from "../pages/Tickets";
import CrearTickets from "../pages/CrearTickets"
import TicketsTecnico from "../pages/TicketsTecnico";

function AppRoutes() {
return ( <BrowserRouter> <Routes>

```
            <Route
                path="/"
                element={<Login />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />
            <Route
                  path="/ayuda"
                 element={<Ayuda />}
            />
            <Route
              path="/configuracion"
                element={<Configuracion />}
            />
            <Route
              path="/tickets"
                element={<Tickets />}
            />
            <Route
              path="/crear-ticket"
                element={<CrearTickets />}
            />
            <Route
    path="/tecnico"
    element={<TicketsTecnico />}
/>

        </Routes>
    </BrowserRouter>
);

}

export default AppRoutes;