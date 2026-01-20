import LogoWhatsapp from "../../svg/LogoWhatsapp"
import Lupa from "../../svg/Lupa"
import Arrow from "../../svg/Flecha"

type itemLinksHeader = {
    label: string
    href: string
}

const navItems: itemLinksHeader[] = [
    { label: "Productos", href: "#" },
    { label: "Promociones", href: "#" },
    { label: "Zona Digital", href: "#" },
    { label: "Ayuda y Contacto", href: "#" },
]

export default function HeaderDesktopNav() {
    return (
        <div className="hidden xl:w-full h-15 xl:flex xl:justify-between gap-2 2xl:gap-4">
            <nav className="h-full flex">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="w-fit h-full flex items-center justify-center uppercase text-xs xl:font-bold px-3 tracking-widest 2xl:tracking-wider "
                        style={{ fontFamily: "Geometria, sans-serif" }}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Contenedor Derecho */}
            <div className="h-full flex items-center gap-3 2xl:gap-4">
                {/* Botón Caja de regalo */}
                <div className="w-9 h-9 flex items-center justify-center">
                    <a href="#" className="h-full flex items-center">
                        <img
                            className="w-full h-auto"
                            src="/icons/caja-regalo.webp"
                            alt="Caja de regalo"
                        />
                    </a>
                </div>

                <LogoWhatsapp className="w-6 h-6 text-black" />

                <Lupa className="w-6 h-6 text-black" />

                {/* Contenedor de botones */}
                <div className="w-fit h-10 flex gap-5">
                    {/* Botón Abre tu cuenta (VERDE) */}
                    <div className="h-full flex items-center">
                        <a
                            href="#"
                            className="
                                group h-full flex items-center justify-center gap-2
                                tracking-wider bg-[#37cb73] text-white uppercase font-semibold text-xs
                                px-4.5 shadow-lg rounded-sm font-['Geometria',sans-serif]
                            "
                        >
                            Abre tu cuenta
                            <div className="rotate-90 transition-transform duration-200 ease-in-out group-hover:rotate-270">
                                <Arrow className="w-3 h-3 text-white" />
                            </div>
                        </a>
                    </div>

                    {/* Botón Banca por internet (AZUL) */}
                    <div className="h-full">
                        <button
                            type="button"
                            className="
                                h-full flex items-center justify-center tracking-wider
                                bg-[#0039a6] hover:bg-[#3361B8] cursor-pointer text-white uppercase font-semibold text-xs 
                                px-4.5 shadow-lg rounded-sm font-['Geometria',sans-serif]
                                transition-transform duration-300 ease-in-out
                            "
                        >
                            Banca por internet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
