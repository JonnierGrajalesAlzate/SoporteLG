import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

function Ayuda() {

    const navigate = useNavigate();

    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            pregunta: "¿Cómo creo un ticket?",
            respuesta:
                "Desde el menú lateral selecciona Crear Ticket, completa la información requerida y envía la solicitud."
        },
        {
            pregunta: "¿Cómo sé si mi ticket fue atendido?",
            respuesta:
                "Puedes consultar el estado desde la opción Ver Tickets."
        },
        {
            pregunta: "¿Qué significa un ticket en espera?",
            respuesta:
                "Indica que el técnico necesita información adicional o está pendiente de un tercero."
        },
        {
            pregunta: "¿Puedo adjuntar archivos?",
            respuesta:
                "Sí, al momento de crear o actualizar un ticket."
        }
    ];

    return (
        <DashboardLayout>

            <div className="space-y-8">

                <div>
                    <h1 className="text-4xl font-bold text-slate-800">
                        Centro de Ayuda
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Encuentra respuestas rápidas y aprende a usar la plataforma.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 text-white">

                    <h2 className="text-3xl font-bold">
                        ¿Necesitas soporte?
                    </h2>

                    <p className="mt-3 text-sky-100">
                        Si no encuentras una solución, crea un ticket y nuestro equipo te ayudará.
                    </p>

                    <button
                        onClick={() => navigate("/crear-ticket")}
                        className="mt-5 bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-300 cursor-pointer transition"
                    >
                        Crear Ticket
                    </button>

                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg text-slate-800">
                            Crear Ticket
                        </h3>

                        <p className="text-slate-500 mt-3">
                            Reporta incidentes relacionados con equipos, software, impresoras o accesos.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg text-slate-800">
                            Consultar Estado
                        </h3>

                        <p className="text-slate-500 mt-3">
                            Haz seguimiento a tus solicitudes y revisa las respuestas del técnico.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg text-slate-800">
                            Base de Conocimiento
                        </h3>

                        <p className="text-slate-500 mt-3">
                            Consulta guías rápidas y preguntas frecuentes.
                        </p>
                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <h2 className="text-2xl font-bold text-slate-800 mb-6">
                        Estados de los Tickets
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div className="rounded-xl p-4">
                            <h3 className="font-semibold text-blue-600">
                                Abierto
                            </h3>
                            <p className="text-slate-500 mt-2">
                                El ticket fue creado y está pendiente de revisión.
                            </p>
                        </div>

                        <div className=" rounded-xl p-4">
                            <h3 className="font-semibold text-yellow-600">
                                En Proceso
                            </h3>
                            <p className="text-slate-500 mt-2">
                                Un técnico se encuentra trabajando en la solicitud.
                            </p>
                        </div>


                        <div className="justify-center rounded-xl p-4">
                            <h3 className="font-semibold text-green-600">
                                Cerrado
                            </h3>
                            <p className="text-slate-500 mt-2">
                                El incidente fue solucionado satisfactoriamente.
                            </p>
                        </div>
                        <div className="justify-center rounded-xl p-4">
                            <h3 className="font-semibold text-violet-600">
                                Reabierto
                            </h3>
                            <p className="text-slate-500 mt-2">
                                El ticket fue reabierto porque la falla persiste.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <h2 className="text-2xl font-bold text-slate-800 mb-6">
                        Preguntas Frecuentes
                    </h2>

                    <div className="space-y-4">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className=" rounded-xl overflow-hidden"
                            >

                                <button
                                    className="w-full text-left p-4 bg-slate-50 hover:bg-slate-300 cursor-pointer"
                                    onClick={() =>
                                        setOpenFAQ(
                                            openFAQ === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    <span className="font-medium">
                                        {faq.pregunta}
                                    </span>
                                </button>

                                {openFAQ === index && (
                                    <div className="p-4 text-slate-600">
                                        {faq.respuesta}
                                    </div>
                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Ayuda;