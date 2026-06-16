function Topbar() {

const usuario =
    JSON.parse(localStorage.getItem("usuario")) || {};

return (
    <header className="bg-white border-b border-slate-200 h-20 px-8 flex items-center justify-between">

        <div>
            <h2 className="text-2xl font-bold text-slate-800">
                Dashboard
            </h2>

            <p className="text-slate-500">
                Bienvenido de vuelta,
                {" "}
                {usuario.nombre}
            </p>
        </div>

        <div className="flex items-center gap-4">

            <input
                type="text"
                placeholder="Buscar..."
                className="bg-slate-100 px-4 py-2 rounded-xl outline-none"
            />

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {usuario.nombre?.charAt(0)}
            </div>

        </div>

    </header>
);

}

export default Topbar;