import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout"; 
import { TodosTickets } from "../services/dashboardService";


function tickets() {

    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filtroTexto, setFiltroTexto] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("todos");

    useEffect(() => {
        cargarTickets();
    }, []);

    const cargarTickets = async () => {
        try {
            const data = await TodosTickets(usuario.id);
            setTickets(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const ticketsFiltrados = tickets.filter((ticket) => {

        const texto = filtroTexto.toLowerCase();

        const coincideTexto =
            ticket.titulo.toLowerCase().includes(texto) ||
            ticket.categoria.toLowerCase().includes(texto) ||
            String(ticket.id).includes(texto);

        const coincideEstado =
            filtroEstado === "todos" ||
            ticket.estado.toLowerCase() === filtroEstado.toLowerCase();

        return coincideTexto && coincideEstado;
    });

    if (loading) {
        return (
            <DashboardLayout>
                <div className="bg-white border p-6 rounded-lg shadow-sm">
                    Cargando tickets...
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout> 
            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                <h1 className="text-3xl font-bold text-slate-800">
                    Mis Tickets
                </h1>

                <p className="text-slate-500 mt-1">
                    Gestiona y consulta todas tus solicitudes
                </p>
            </div> 
            <div className="mt-6 bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
 
                <input
                    type="text"
                    placeholder="Buscar por ID, título o categoría..."
                    value={filtroTexto}
                    onChange={(e) => setFiltroTexto(e.target.value)}
                    className="w-full md:w-1/2 border border-slate-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
 
                <select
                    value={filtroEstado}
                    onChange={(e) => setFiltroEstado(e.target.value)}
                    className="w-full md:w-1/4 border border-slate-300 px-3 py-2 rounded-lg"
                >
                    <option value="todos">Todos los estados</option>
                    <option value="abierto">Abierto</option>
                    <option value="en proceso">En proceso</option>
                    <option value="cerrado">Cerrado</option>
                    <option value="resuelto">Resuelto</option>
                </select>

            </div>
 
            <div className="mt-6 bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto">

                <table className="w-full text-sm">

                    <thead>
                        <tr className="bg-slate-100 text-slate-600">
                            <th className="text-left p-3">ID</th>
                            <th className="text-left p-3">Asunto</th>
                            <th className="text-left p-3">Categoría</th>
                            <th className="text-left p-3">Estado</th>
                            <th className="text-left p-3">Prioridad</th>
                            <th className="text-left p-3">Fecha</th>
                        </tr>
                    </thead>

                    <tbody>

                        {ticketsFiltrados.length > 0 ? (
                            ticketsFiltrados.map((ticket) => (
                                <tr
                                    key={ticket.id}
                                    className="hover:bg-slate-50 transition"
                                >

                                    <td className="p-3 font-medium">
                                        #{ticket.id}
                                    </td>

                                    <td className="p-3">
                                        <div className="font-medium">
                                            {ticket.titulo}
                                        </div>
                                        <div className="text-xs text-slate-400">
                                            {ticket.categoria}
                                        </div>
                                    </td>

                                    <td className="p-3 text-slate-600">
                                        {ticket.categoria}
                                    </td>

                                    <td className="p-3">
                                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                                            {ticket.estado}
                                        </span>
                                    </td>

                                    <td className="p-3">
                                        <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
                                            {ticket.prioridad}
                                        </span>
                                    </td>

                                    <td className="p-3 text-slate-500">
                                        {new Date(ticket.fecha_creacion).toLocaleDateString()}
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-6 text-center text-slate-400">
                                    No se encontraron tickets
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>
    );
}

export default tickets;