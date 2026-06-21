import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function Configuracion() {
    const navigate = useNavigate();

    const usuario =
        JSON.parse(localStorage.getItem("usuario")) || {};

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        navigate("/");
    };

    const iniciales = `${usuario.nombre?.charAt(0) || ""}${
        usuario.apellido?.charAt(0) || ""
    }`;

    return (
        <DashboardLayout>

            <div className="max-w-6xl mx-auto">
 
                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-slate-800">
                        Configuración
                    </h1>

                    <p className="text-slate-500 mt-2">
                       Información sobre tu cuenta.
                    </p>

                </div>
 
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
 
                    <div className="bg-sky-900">

                        <div className="flex items-center gap-6">

                            <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center">

                                <span className="text-white text-4xl font-bold">
                                    {iniciales}
                                </span>
                            </div>

                            <div>

                                <h2 className="text-4xl font-bold text-white uppercase">
                                    {usuario.nombre}
                                </h2>

                                <p className="text-sky-100 mt-2 text-lg">
                                    {usuario.cargo}
                                </p>


                            </div>

                        </div>

                    </div>
 
                    <div className="p-8">

                        <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-6">
                            Información de la cuenta
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-slate-50 rounded-2xl p-6">

                                <p className="text-xs uppercase font-bold text-slate-400 mb-2">
                                    Nombre Completo
                                </p>

                                <p className="text-lg font-semibold text-slate-800">
                                    {usuario.nombre} {usuario.apellido}
                                </p>

                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6">

                                <p className="text-xs uppercase font-bold text-slate-400 mb-2">
                                    Correo Corporativo
                                </p>

                                <p className="text-lg font-semibold text-slate-800">
                                    {usuario.correo}
                                </p>

                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6">

                                <p className="text-xs uppercase font-bold text-slate-400 mb-2">
                                    Rol
                                </p>

                                <p className="text-lg font-semibold text-slate-800">
                                    {usuario.rol}
                                </p>

                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6">

                                <p className="text-xs uppercase font-bold text-slate-400 mb-2">
                                    Cargo
                                </p>

                                <p className="text-lg font-semibold text-slate-800">
                                    {usuario.cargo}
                                </p>

                            </div>

                        </div>
 
                        <div className="mt-10 border-t pt-8">

                            <button
                                onClick={cerrarSesion}
                               className="
                                        w-60
                                        py-4
                                        rounded-2xl
                                        bg-zinc-900
                                        cursor:pointer
                                        text-white
                                    "
                            >
                                Cerrar Sesión
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Configuracion;