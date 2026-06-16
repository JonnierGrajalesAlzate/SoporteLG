import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import logo from "../assets/logo.png";

function Login() {
const navigate = useNavigate();

const [correo, setCorreo] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
        setLoading(true);

        const data = await login(
            correo,
            password
        );

        localStorage.setItem(
            "usuario",
            JSON.stringify(data.usuario)
        );

        navigate("/dashboard");

    } catch (err) {

        setError(
            err.response?.data?.message ||
            "Credenciales incorrectas"
        );

    } finally {

        setLoading(false);

    }
};

return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="bg-sky-700 h-3"></div>

            <div className="p-10">

                <div className="flex flex-col items-center">

                    <img
                        src={logo}
                        alt="Logo"
                        className="w-48 h-48 object-contain mb-4"
                    />

                    <h1 className="text-3xl font-bold text-sky-800">
                        Mesa de Ayuda
                    </h1>

                    <p className="text-gray-500 mt-2 text-center">
                        Sistema de Gestión de Tickets
                    </p>

                </div>

                <form
                    onSubmit={handleLogin}
                    className="mt-8"
                >

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Correo Electrónico
                        </label>

                        <input
                            type="email"
                            value={correo}
                            onChange={(e) =>
                                setCorreo(e.target.value)
                            }
                            placeholder="Correo electrónico"
                            className="w-full px-4 py-3 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            required
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="********"
                            className="w-full px-4 py-3 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            required
                        />

                    </div>

                    {error && (
                        <div className="mb-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
                    >
                        {loading
                            ? "Ingresando..."
                            : "Iniciar Sesión"}
                    </button>

                </form>

                <div className="mt-8 border-t border-gray-200 pt-4 text-center">

                    <p className="text-sm text-gray-500">
                        LG Soporte
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        Mesa de Ayuda Corporativa
                    </p>

                </div>

            </div>

        </div>

    </div>
);

}

export default Login;