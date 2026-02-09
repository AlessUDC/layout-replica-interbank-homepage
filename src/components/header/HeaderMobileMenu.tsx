import { useState } from "react"
import Lupa from "../../svg/Lupa"
import Arrow from "../../svg/Flecha"
import { navbarData } from "../../db/db"
import Menos from "../../svg/Menos"
import Mas from "../../svg/Mas"
import Whatsapp from "../../svg/Whatsapp"
import Reloj from "../../svg/Reloj"

export default function HeaderMobileMenu() {
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [openGroup, setOpenGroup] = useState<string | null>(null)
    const [showWhatsAppOverlay, setShowWhatsAppOverlay] = useState(false)

    const toggleMenu = (label: string) => {
        setOpenMenu(openMenu === label ? null : label)
        setOpenCategory(null) // Reset sub-levels
    }

    const toggleCategory = (label: string) => {
        setOpenCategory(openCategory === label ? null : label)
        setOpenGroup(null) // Reset sub-levels
    }

    const toggleGroup = (label: string) => {
        setOpenGroup(openGroup === label ? null : label)
    }
    // Suppress unused warning for restoration
    void toggleGroup

    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-white overflow-y-auto pb-20 ${showWhatsAppOverlay ? 'z-110' : 'z-40'}`}>
            <div className="h-16 flex items-center px-6.5">
                <Lupa className="w-6 h-6" />
                <input
                    type="search"
                    placeholder="Buscar en el sitio"
                    className="px-4 py-6 focus:outline-none w-full"
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
                <div className="pb-24">
                    <ul>
                        {navbarData.map((menu) => (
                            <li key={menu.label} className="border-t border-gray-100">
                                <div
                                    className="h-15 flex items-center justify-between px-7 font-semibold cursor-pointer select-none bg-white relative z-10"
                                    onClick={() => toggleMenu(menu.label)}
                                >
                                    <p className="text-gray-900">{menu.label}</p>
                                    <Arrow className={`w-3 h-3 text-black transition-transform duration-300 ${openMenu === menu.label ? '-rotate-90' : 'rotate-90'}`} />
                                </div>

                                {/* Level 2: Categories */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openMenu === menu.label ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-gray-50">
                                        {menu.categories?.map((category, idx) => {
                                            const hasSubGroups = category.groups && (category.groups as any[]).length > 0;
                                            const isLeaf = !hasSubGroups || (category.groups && !category.groups.some(g => 'items' in g && (g as any).items.length > 0));

                                            // 3. Rename 'Inversión y Combos'
                                            const displayLabel = category.label === "Inversión y Combos" ? "Inversión y Combos Interbank" : category.label;

                                            return (
                                                <div key={idx} className="border-t border-gray-200">
                                                    <div
                                                        className={`flex items-center justify-between px-7 py-4 cursor-pointer select-none transition-colors duration-200 ${openCategory === category.label ? 'bg-gray-100' : 'bg-gray-50'}`}
                                                        onClick={() => isLeaf ? null : toggleCategory(category.label)}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className={`font-medium text-sm ${openCategory === category.label ? '' : 'text-gray-700'}`}>
                                                                {displayLabel}
                                                            </span>
                                                        </div>
                                                        {!isLeaf && (
                                                            <span
                                                                className={`
                                                                text-xl font-bold leading-none text-[#05BE50] 
                                                                transition-transform duration-300 inline-block content-center
                                                                ${openCategory === category.label ? 'rotate-180' : 'rotate-0'}
                                                            `}
                                                            >
                                                                {openCategory === category.label ? <Menos className="w-4 h-4 font-black text-[#05BE50]" /> : <Mas className="w-4 h-4 font-black text-[#05BE50]" />}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Level 3: Groups */}
                                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openCategory === category.label && !isLeaf ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                        <div className="bg-gray-100 pb-2">
                                                            {/* 2. Show title 'Productos Hipotecarios' for Crédito Hipotecario section */}
                                                            {category.label === "Crédito Hipotecario" && (
                                                                <div className="px-7 pt-6 pb-2">
                                                                    <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wide">
                                                                        Productos Hipotecarios
                                                                    </h3>
                                                                </div>
                                                            )}

                                                            {(category.groups as any[]).map((group, gIdx) => (
                                                                <div key={gIdx} className="border-t-[0.5px] border-gray-300 py-8">
                                                                    {group.label && group.label !== "Crédito Hipotecario" && ( // Avoid redundant title if group matches category logic
                                                                        <div
                                                                            className="px-7  pb-2 text-sm font-bold text-gray-800 flex justify-between items-center"
                                                                        >
                                                                            {group.label}
                                                                        </div>
                                                                    )}
                                                                    <ul>
                                                                        {group.items && group.items.map((link: any, lIdx: number) => {
                                                                            // 4. Remove '>' and filter '___'
                                                                            if (link.label === '___' || link.label === '______') return null;
                                                                            const cleanLabel = link.label.replace(/>/g, '').trim();

                                                                            return (
                                                                                <li key={lIdx} className="px-7 py-2">
                                                                                    <a href={link.href} className="text-gray-600 text-sm block hover:text-[#05BE50] transition-colors">
                                                                                        {cleanLabel}
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fabulous WhatsApp Floating Button */}
                {!showWhatsAppOverlay && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <button
                            onClick={() => setShowWhatsAppOverlay(true)}
                            className="
                            w-14 h-14 bg-[#25D366] rounded-full shadow-lg 
                            flex items-center justify-center 
                            hover:scale-110 transition-transform duration-300
                        "
                        >
                            <Whatsapp className="w-9 h-9 filter brightness-0 invert" />
                        </button>
                    </div>
                )}

                {/* WhatsApp Overlay */}
                {showWhatsAppOverlay && (
                    <div className="fixed inset-0 z-10 bg-white flex flex-col animate-in fade-in duration-300">
                        {/* Header with Close Button */}
                        <div className="flex justify-end pt-6 px-6">
                            <button onClick={() => setShowWhatsAppOverlay(false)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-7 pb-6 flex flex-col ">
                            {/* Assistant Header */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                    <img
                                        src="/hamburger-whatsapp-asistente.png"
                                        alt="Asistente Virtual"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-lg font-medium">
                                    Estamos para ayudarte
                                </h2>
                            </div>
                            {/* Línea divisora */}
                            <div className="w-full border-b-[0.5px] border-gray-200 my-4" />

                            {/* Info Section */}
                            <div className="flex flex-col">
                                <h3 className="text-[#3DB6D6] font-bold text-sm tracking-wide uppercase">
                                    POR WHATSAPP
                                </h3>
                                <p className="text-[#5E6D77] text-base">
                                    A través de AVI, tu asistente virtual
                                </p>
                                <div className="flex items-center gap-2 text-[#05BE50] text-sm">
                                    <Reloj className="w-5 h-5 text-[#25D366]" />
                                    <span>Disponible ahora</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="https://wa.me/51993119000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    bg-[#05BE50] hover:bg-[#049c41] text-white 
                                    font-bold text-base py-3 px-4 rounded-[4px] 
                                    flex items-center justify-center gap-1
                                    transition-colors shadow-sm mt-2 h-10 w-36
                                "
                            >
                                <Whatsapp className="w-6 h-6 filter brightness-0 invert" />
                                <span className="text-xs">993 119 000</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
