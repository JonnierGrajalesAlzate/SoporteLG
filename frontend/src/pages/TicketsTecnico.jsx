import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
    getMisTicketsTecnico
} from "../services/tecnicoService";

function TicketsTecnico() {

    const usuario =
        JSON.parse(localStorage.getItem("usuario")) || {};

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarTickets();
    }, []);

    const cargarTickets = async () => {

        try {

            const data =
                await getMisTicketsTecnico(usuario.id);

            setTickets(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-6">
                    Cargando tickets...
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>

            <div className="bg-white rounded-xl p-6 shadow-sm border">

                <h1 className="text-3xl font-bold">
                    Tickets Asignados
                </h1>

                <p className="text-slate-500 mt-2">
                    Solicitudes asignadas a ti
                </p>

            </div>

            <div className="mt-6 bg-white rounded-xl border shadow-sm overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="bg-slate-100">

                            <th className="p-3 text-left">
                                ID
                            </th>

                            <th className="p-3 text-left">
                                Título
                            </th>

                            <th className="p-3 text-left">
                                Categoría
                            </th>

                            <th className="p-3 text-left">
                                Estado
                            </th>

                            <th className="p-3 text-left">
                                Prioridad
                            </th>

                            <th className="p-3 text-left">
                                Fecha
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {tickets.map((ticket) => (

                            <tr
                                key={ticket.id}
                                className="border-t"
                            >

                                <td className="p-3">
                                    #{ticket.id}
                                </td>

                                <td className="p-3">
                                    {ticket.titulo}
                                </td>

                                <td className="p-3">
                                    {ticket.categoria}
                                </td>

                                <td className="p-3">
                                    {ticket.estado}
                                </td>

                                <td className="p-3">
                                    {ticket.prioridad}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        ticket.fecha_creacion
                                    ).toLocaleDateString()}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>
    );
}

export default TicketsTecnico;