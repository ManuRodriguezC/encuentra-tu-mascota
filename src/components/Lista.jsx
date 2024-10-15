export const Lista = ({ nombreCampo, tipo, isImput }) => {
    return (
        <li className="flex flex-col ">
            {isImput ? (
                tipo === "file" ? (
                    <div className=" relative  rounded-2xl text-lg  focus:outline-none curso focus:border-orange">
                        <input
                            type="file"
                            id={nombreCampo}
                            name={nombreCampo}
                            className="absolute inset-0 w-full  opacity-0 cursor-pointer "
                            required
                        />
                        <button
                            type="button"
                            className="w-80 pl-5 h-auto py-2 rounded-2xl text-lg mt-1 border bg-Newhite focus:outline-none focus:border-orange"
                        >
                            Subir {nombreCampo}
                        </button>
                    </div>
                ) : (
                    <input
                        type={tipo}
                        id={nombreCampo}
                        name={nombreCampo}
                        placeholder={`Ingresa ${nombreCampo}`}
                        className="w-80 pl-5 h-auto py-2 rounded-2xl text-lg mt-1 border focus:outline-none focus:border-orange"
                        required
                    />
                )
            ) : (
                <select
                    name={nombreCampo}
                    id=""
                    className="w-80 pl-5 h-auto py-2 rounded-2xl text-lg mt-1 border focus:outline-none focus:border-orange"
                >
                    <option value="" disabled selected hidden>
                        {nombreCampo}
                    </option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                </select>
            )}
        </li>
    );
};
