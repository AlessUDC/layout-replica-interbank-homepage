import Lupa from "../../svg/Lupa"
import Arrow from "../../svg/Flecha"

export default function HeaderMobileMenu() {
    return (
        <div className="fixed z-40 top-0 left-0 w-full h-screen bg-white overflow-y-auto">
            <div className="h-16 flex items-center px-6.5">
                <Lupa className="w-6 h-6" />
                <input
                    type="search"
                    placeholder="Buscar en el sitio"
                    className="px-4 py-6 focus:outline-none"
                />
            </div>

            <div>
                <div className="w-full px-6.5 py-4">
                    {/* Botón Abre tu cuenta (VERDE) */}
                    <div className="h-10 mb-3">
                        <a
                            href="#"
                            className="
                                w-36 h-full flex items-center justify-center tracking-wider whitespace-nowrap
                                bg-[#05be50] text-white uppercase font-semibold text-xs 
                                px-4 shadow-lg rounded-sm  font-['Geometria',sans-serif] 
                            "
                        >
                            Abre tu cuenta
                        </a>
                    </div>

                    {/* Botón Banca por internet (AZUL) */}
                    <div className="h-10">
                        <button
                            type="button"
                            className="
                                w-44 h-full flex items-center justify-center tracking-wider whitespace-nowrap
                                bg-[#0039a6] text-white uppercase font-semibold text-xs 
                                px-4.5 shadow-lg rounded-sm font-['Geometria',sans-serif]
                            "
                        >
                            Banca por internet
                        </button>
                    </div>
                </div>

                {/* Menu Items */}
                <div>
                    <ul>
                        <li className="h-15 flex items-center justify-between px-6.5 font-semibold border-t border-black/5">
                            <p>Productos</p>
                            <Arrow className="w-3 h-3 text-black rotate-90 hover:rotate-270 transition-all duration-200" />
                        </li>
                        <li className="h-15 flex items-center justify-between px-6.5 font-semibold border-t border-black/5">
                            <p>Promociones</p>
                            <Arrow className="w-3 h-3 text-black rotate-90 hover:rotate-270 transition-all duration-200" />
                        </li>
                        <li className="h-15 flex items-center justify-between px-6.5 font-semibold border-t border-black/5">
                            <p>Zona Digital</p>
                            <Arrow className="w-3 h-3 text-black rotate-90 hover:rotate-270 transition-all duration-200" />
                        </li>
                        <li className="h-15 flex items-center justify-between px-6.5 font-semibold border-y border-black/5">
                            <p>Ayuda y Contacto</p>
                            <Arrow className="w-3 h-3 text-black rotate-90 hover:rotate-270 transition-all duration-200" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
