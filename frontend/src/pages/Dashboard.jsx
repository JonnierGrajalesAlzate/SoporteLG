import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDashboard } from "../services/dashboardService";

function Dashboard() {

const usuario =
    JSON.parse(localStorage.getItem("usuario")) || {};

const [estadisticas, setEstadisticas] = useState({
    activos: 0,
    resueltos: 0,
    total: 0
});

const [loading, setLoading] = useState(true);

useEffect(() => {

    cargarDashboard();

}, []);

const cargarDashboard = async () => {

    try {

        const data = await getDashboard(
            usuario.id
        );

        setEstadisticas({
            activos: data.activos,
            resueltos: data.resueltos,
            total: data.total
        });

    } catch (error) {

        console.error(
            "Error cargando dashboard:",
            error
        );

    } finally {

        setLoading(false);

    }
};

if (loading) {
    return (
        <DashboardLayout>
            <div className="text-center text-slate-500 text-lg">
                Cargando información...
            </div>
        </DashboardLayout>
    );
}

return (
    <DashboardLayout>

        <h1 className="text-4xl font-bold text-slate-800">
            Bienvenido, {usuario.nombre} 👋
        </h1>

        <p className="text-slate-500 mt-2">
            Aquí tienes un resumen de tu actividad en LG Soporte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <p className="text-slate-500">
                    Tickets activos
                </p>

                <h2 className="text-5xl font-bold text-blue-600 mt-3">
                    {estadisticas.activos}
                </h2>

                <p className="text-slate-400 text-sm mt-2">
                    pendientes de resolución
                </p>

            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <p className="text-slate-500">
                    Resueltos
                </p>

                <h2 className="text-5xl font-bold text-emerald-600 mt-3">
                    {estadisticas.resueltos}
                </h2>

                <p className="text-slate-400 text-sm mt-2">
                    cerrados satisfactoriamente
                </p>

            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <p className="text-slate-500">
                    Total registrados
                </p>

                <h2 className="text-5xl font-bold text-violet-600 mt-3">
                    {estadisticas.total}
                </h2>

                <p className="text-slate-400 text-sm mt-2">
                    desde el inicio
                </p>

            </div>

        </div>

        <h3 className="mt-10 mb-5 text-slate-700 font-bold tracking-wider">
            ACCESOS RÁPIDOS
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl text-white p-8 shadow-lg">

                <h3 className="text-2xl font-bold">
                    Crear Ticket
                </h3>

                <p className="mt-3 text-blue-100">
                    Reporta un incidente o solicita soporte técnico.
                </p>

                <button className="mt-6 bg-white/20 hover:bg-white/30 px-5 py-2 rounded-xl transition">
                    Abrir ticket →
                </button>

            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl text-white p-8 shadow-lg">

                <h3 className="text-2xl font-bold">
                    Ver Mis Solicitudes
                </h3>

                <p className="mt-3 text-emerald-100">
                    Consulta el estado y seguimiento de tus tickets.
                </p>

                <button className="mt-6 bg-white/20 hover:bg-white/30 px-5 py-2 rounded-xl transition">
                    Ver solicitudes →
                </button>

            </div>

            <div className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-3xl text-white p-8 shadow-lg">

                <h3 className="text-2xl font-bold">
                    Ayuda
                </h3>

                <p className="mt-3 text-violet-100">
                    Instructivos, manuales y preguntas frecuentes.
                </p>

                <button className="mt-6 bg-white/20 hover:bg-white/30 px-5 py-2 rounded-xl transition">
                    Ver ayuda →
                </button>

            </div>

        </div>

    </DashboardLayout>
);


}

export default Dashboard;