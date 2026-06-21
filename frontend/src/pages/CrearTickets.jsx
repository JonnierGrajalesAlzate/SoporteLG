import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import { crearTicket } from "../services/ticketService";

import {
    getCategorias,
    getPrioridades
} from "../services/catalogosService";

function CrearTickets() {

    const usuario =
        JSON.parse(localStorage.getItem("usuario")) || {};

    const [categorias, setCategorias] = useState([]);
    const [prioridades, setPrioridades] = useState([]);

    const [mensaje, setMensaje] = useState("");

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        categoria_id: "",
        prioridad_id: ""
    });

    useEffect(() => {
        cargarCatalogos();
    }, []);

    const cargarCatalogos = async () => {
        try {

            const categoriasData =
                await getCategorias();

            const prioridadesData =
                await getPrioridades();

            setCategorias(categoriasData);
            setPrioridades(prioridadesData);

        } catch (error) {

            console.error(
                "Error cargando catálogos",
                error
            );

        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await crearTicket({
                ...formData,
                usuario_id: usuario.id
            });

            setMensaje(response.message);

            setFormData({
                titulo: "",
                descripcion: "",
                categoria_id: "",
                prioridad_id: ""
            });

        } catch (error) {

            console.error(error);

            setMensaje(
                "Error al crear el ticket"
            );

        }

    };

    return (
        <DashboardLayout>

            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">

                <h1 className="text-3xl font-bold text-slate-800">
                    Crear Ticket
                </h1>

                <p className="text-slate-500 mt-1">
                    Registra una nueva solicitud de soporte
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="
                    mt-6
                    bg-white
                    border
                    border-slate-200
                    rounded-xl
                    shadow-sm
                    p-6
                    space-y-5
                "
            >

                <div>
                    <label className="block mb-2 font-medium text-slate-700">
                        Título
                    </label>

                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Ingrese el asunto del ticket"
                        className="
                            w-full
                            border
                            border-slate-300
                            rounded-lg
                            px-4
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-cyan-500
                        "
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium text-slate-700">
                        Descripción
                    </label>

                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Describe detalladamente el problema..."
                        className="
                            w-full
                            border
                            border-slate-300
                            rounded-lg
                            px-4
                            py-3
                            resize-none
                            focus:outline-none
                            focus:ring-2
                            focus:ring-cyan-500
                        "
                        required
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">

                    <div>
                        <label className="block mb-2 font-medium text-slate-700">
                            Categoría
                        </label>

                        <select
                            name="categoria_id"
                            value={formData.categoria_id}
                            onChange={handleChange}
                            className="
                                w-full
                                border
                                border-slate-300
                                rounded-lg
                                px-4
                                py-3
                            "
                            required
                        >
                            <option value="">
                                Seleccione una categoría
                            </option>

                            {categorias.map((categoria) => (
                                <option
                                    key={categoria.id}
                                    value={categoria.id}
                                >
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-slate-700">
                            Prioridad
                        </label>

                        <select
                            name="prioridad_id"
                            value={formData.prioridad_id}
                            onChange={handleChange}
                            className="
                                w-full
                                border
                                border-slate-300
                                rounded-lg
                                px-4
                                py-3
                            "
                            required
                        >
                            <option value="">
                                Seleccione una prioridad
                            </option>

                            {prioridades.map((prioridad) => (
                                <option
                                    key={prioridad.id}
                                    value={prioridad.id}
                                >
                                    {prioridad.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <div className="flex justify-end">

                    <button
                        type="submit"
                        className="
                            px-6
                            py-3
                            rounded-lg
                            bg-cyan-500
                            hover:bg-cyan-600
                            text-white
                            font-medium
                            transition
                        "
                    >
                        Crear Ticket
                    </button>

                </div>

                {mensaje && (

                    <div
                        className="
                            bg-green-100
                            border
                            border-green-300
                            text-green-700
                            p-3
                            rounded-lg
                        "
                    >
                        {mensaje}
                    </div>

                )}

            </form>

        </DashboardLayout>
    );
}

export default CrearTickets;