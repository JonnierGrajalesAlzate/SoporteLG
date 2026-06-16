import { Link } from "react-router-dom";

function Sidebar() {

const usuario =
    JSON.parse(localStorage.getItem("usuario")) || {};

return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col">

        <div className="p-6 border-b border-slate-800">

            <h1 className="text-2xl font-bold">
                LG Soporte
            </h1>

            <p className="text-slate-400 text-sm">
                Mesa de Ayuda Corporativa
            </p>

        </div>

        <nav className="flex-1 p-4">

            <ul className="space-y-3">

                <li>
                    <Link
                        to="/dashboard"
                        className="block px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 transition"
                    >
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link
                        to="/crear-ticket"
                        className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition"
                    >
                        Crear Ticket
                    </Link>
                </li>

                <li>
                    <Link
                        to="/tickets"
                        className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition"
                    >
                        Ver Tickets
                    </Link>
                </li>

                <li>
                    <Link
                        to="/ayuda"
                        className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition"
                    >
                        Ayuda
                    </Link>
                </li>

                <li>
                    <Link
                        to="/configuracion"
                        className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition"
                    >
                        Configuración
                    </Link>
                </li>

            </ul>

        </nav>

        <div className="p-4 border-t border-slate-800">

            <div className="bg-slate-800 rounded-xl p-3">

                <p className="font-semibold">
                    {usuario.nombre}
                </p>

                <p className="text-sm text-slate-400">
                    {usuario.rol}
                </p>

            </div>

        </div>

    </aside>
);


}

export default Sidebar;