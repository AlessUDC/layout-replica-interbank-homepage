import { useState } from "react"
import Hamburger from "hamburger-react"
import Padlock from "../svg/Candado"
import LogoInterbank from "../svg/LogoInterbank"
import HeaderTopBar from "./header/HeaderTopBar"
import HeaderBottomBar from "./header/HeaderBottomBar"
import HeaderDesktopNav from "./header/HeaderDesktopNav"
import HeaderMobileMenu from "./header/HeaderMobileMenu"

export default function Header() {
    const [isOpen, setOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isLockMenuOpen, setLockMenuOpen] = useState(false)

    return (
        <>
            {!isSearchOpen && <HeaderTopBar />}

            {/* Sticky Wrapper */}
            <div className="sticky top-0 z-50">
                {/* Bar intermedio: LOGO | navBar(Productos,Promociones,ZonaDigital,AyudayContacto) | [ÍCONOS] |  [ABRE TU CUENTA] [BANCA POR INTERNET] */}
                <div
                    className="
                        bg-white flex justify-between items-center 2xl:justify-center 2xl:gap-8
                        px-7.25 md:px-6 lg:px-8.5 md:py-1.5 xl:px-10 xl:py-0 md:justify-start xl:justify-between
                        ${isSearchOpen ? '' : 'border-b border-black/5 shadow-[0_3px_6px_-2px_rgba(0,0,0,0.15)]'}
                    "
                >
                    {/* Logo INTERBANK */}
                    <div className="w-31 xl:w-38.5 lg:flex lg:justify-start ">
                        <a href="/" className="w-full h-full">
                            <LogoInterbank className="w-full h-full" />
                        </a>
                    </div>

                    <div className="flex items-center gap-2 md:gap-0 ">
                        {/* Icono Candado */}
                        <div className="w-fit h-fit md:hidden relative">
                            <button onClick={() => {
                                setLockMenuOpen(!isLockMenuOpen)
                                if (isOpen) setOpen(false)
                            }}>
                                <Padlock />
                            </button>

                            {isLockMenuOpen && (
                                <>
                                    <div className="fixed inset-0 top-22 bg-black/20 z-40" onClick={() => setLockMenuOpen(false)} />
                                    <div className="absolute top-full left-3 mt-3 w-86 -translate-x-4/5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                                        {/* Puntero/Ramita con animación */}
                                        <div className="absolute -top-1.5 right-14 w-3 h-3 bg-white rotate-90 border-t border-l border-gray-200 z-0 animate-arrow-swing" />

                                        <div className="relative bg-white shadow-xl rounded overflow-hidden z-10">
                                            <div className="flex flex-col">
                                                <a href="#" className="px-6 py-4 text-gray-800 font-medium hover:bg-gray-50 transition-colors border-b border-gray-300">
                                                    Personas
                                                </a>
                                                <a href="#" className="px-6 py-4 text-gray-800 font-medium hover:bg-gray-50 transition-colors">
                                                    Empresa
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Hamburger Menu */}
                        <div
                            className={`
                            xl:hidden md:pl-12 lg:pl-22
                            ${isOpen ? "fixed top-3 right-5 z-100" : "relative z-60"}
                        `}
                        >
                            <Hamburger
                                size={25}
                                toggled={isOpen}
                                toggle={(val) => {
                                    setOpen(val)
                                    if (val) setLockMenuOpen(false)
                                }}
                            />
                        </div>

                        {isOpen && <HeaderMobileMenu />}

                        <HeaderDesktopNav
                            isSearchOpen={isSearchOpen}
                            setIsSearchOpen={setIsSearchOpen}
                        />
                    </div>
                </div>

                {!isSearchOpen && <HeaderBottomBar />}
            </div>
        </>
    )
}
