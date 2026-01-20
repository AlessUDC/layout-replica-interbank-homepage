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

    return (
        <>
            <HeaderTopBar />

            {/* Sticky Wrapper */}
            <div className="sticky top-0 z-50">
                {/* Bar intermedio: LOGO | navBar | Busqueda y botones */}
                <div
                    className="
                    bg-white flex justify-between items-center 2xl:justify-center 2xl:gap-8
                    px-7.25 md:px-6 lg:px-8.5 md:py-1.5 xl:px-10 xl:py-0 md:justify-start xl:justify-between
                    border-b border-black/5 shadow-[0_3px_6px_-2px_rgba(0,0,0,0.15)]
                "
                >
                    <div className="w-31 xl:w-38.5 lg:flex lg:justify-start ">
                        <a href="#" className="w-full h-full">
                            <LogoInterbank className="w-full h-full" />
                        </a>
                    </div>

                    <div className="flex items-center gap-2 md:gap-0 ">
                        <div className="w-fit h-fit md:hidden">
                            <Padlock />
                        </div>

                        {/* Hamburger Menu */}
                        <div
                            className={`
                            xl:hidden md:pl-12 lg:pl-22
                            ${isOpen ? "fixed top-3 right-5 z-100" : "relative z-60"}
                        `}
                        >
                            <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
                        </div>

                        {isOpen && <HeaderMobileMenu />}

                        <HeaderDesktopNav />
                    </div>
                </div>

                <HeaderBottomBar />
            </div>
        </>
    )
}
