import { useState, useRef } from "react"
import LogoWhatsapp from "../../svg/LogoWhatsapp"
import Lupa from "../../svg/Lupa"
import Arrow from "../../svg/Flecha"
import { navbarData } from "../../db/db"
import type { NavbarCategory } from "../../types"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Reloj from "../../svg/Reloj"

interface HeaderDesktopNavProps {
    isSearchOpen: boolean
    setIsSearchOpen: (isOpen: boolean) => void
}

export default function HeaderDesktopNav({ isSearchOpen, setIsSearchOpen }: HeaderDesktopNavProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [activeCategory, setActiveCategory] = useState<NavbarCategory | null>(null)

    const [indicatorProps, setIndicatorProps] = useState({ left: 0, opacity: 0 })
    const [isWhatsappOpen, setIsWhatsappOpen] = useState(false)
    const whatsappPopupRef = useRef<any>(null)

    const handleMenuEnter = (label: string, e: React.MouseEvent<HTMLDivElement>) => {
        if (isSearchOpen) return
        setActiveMenu(label)
        setActiveCategory(null)

        if (e.currentTarget) {
            const left = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
            setIndicatorProps({ left, opacity: 1 })
        }
    }

    const handleMenuLeave = () => {
        setActiveMenu(null)
        setActiveCategory(null)
        setIndicatorProps(prev => ({ ...prev, opacity: 0 }))
    }

    const handleCategoryEnter = (category: NavbarCategory) => {
        setActiveCategory(category)
    }

    return (
        <div className="hidden xl:w-full h-15 xl:flex xl:justify-between gap-2 2xl:gap-4 relative nav-desktop">
            <nav
                className={`h-full flex group relative transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onMouseLeave={handleMenuLeave}
            >
                {navbarData.map((item) => (
                    <div
                        key={item.label}
                        className="h-full"
                        onMouseEnter={(e) => handleMenuEnter(item.label, e)}
                    >
                        <a
                            href={item.href}
                            className={`
                                w-fit h-full flex items-center justify-center uppercase text-xs xl:font-bold px-3 tracking-widest 2xl:tracking-wider 
                                ${activeMenu ? (activeMenu === item.label ? 'text-black font-black' : 'text-gray-300') : 'text-gray-900 hover:text-black'}
                                transition-colors duration-200
                            `}
                            style={{ fontFamily: "Geometria, sans-serif" }}
                        >
                            {item.label}
                        </a>

                        {/* Dropdown del Mega Menú */}
                        {activeMenu === item.label && item.categories && (
                            <>
                                <div className="absolute top-19 w-auto -translate-x-1/2 left-17/20 bg-transparent z-50 animate-in fade-in duration-200 flex justify-center pt-0">
                                    <div className="absolute -top-4 left-0 w-full max-w-300 h-4 bg-transparent" />
                                    <div className="w-full max-w-300 bg-white shadow-xl rounded-md overflow-hidden border-t border-gray-100 flex flex-col relative">
                                        <div className="w-full bg-white flex items-center justify-start px-8 py-6 gap-10 border-b border-gray-200 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.05)] relative z-20">
                                            {item.categories.map((category, index) => {
                                                const isActive = activeCategory?.label === category.label
                                                const isExampleActive = !!activeCategory
                                                const iconStyle = (!isExampleActive || isActive) ? "" : "grayscale opacity-50"
                                                const textColor = (!isExampleActive || isActive) ? "text-gray-900" : "text-gray-400"
                                                return (
                                                    <div
                                                        key={index}
                                                        className="h-full flex flex-col items-center justify-start cursor-pointer group gap-2 relative min-w-[120px]"
                                                        onMouseEnter={() => handleCategoryEnter(category)}
                                                    >
                                                        {category.icon && (
                                                            <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${iconStyle}`}>
                                                                <img src={category.icon} alt={category.label} className="w-full h-full object-contain" />
                                                            </div>
                                                        )}
                                                        <span className={`w-full text-sm font-semibold text-center transition-colors duration-200 ${textColor}`}>
                                                            {category.label}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {(() => {
                                            if (!activeCategory) return null
                                            const groups = (activeCategory.groups || []) as any[]
                                            const allMainGroups = groups.filter(g => !g.label.includes("Ayuda"))
                                            const validMainGroups = allMainGroups.filter(g => g.items && g.items.length > 0)
                                            if (validMainGroups.length === 0) return null
                                            const bottomGroups = groups.filter(g => g.label.includes("Ayuda") && !g.label.includes("Centro de Ayuda Plin"))
                                            const showRightPanel = activeCategory.rightPanel && activeCategory.rightPanel.style !== 'empty'

                                            return (
                                                <div
                                                    className={`w-full bg-[#F9FAFB] transition-all duration-300 overflow-hidden shadow-lg h-106 opacity-100 flex
                                                    ${isSearchOpen && 'opacity-0'}
                                                    `}
                                                >
                                                    <div className={`flex flex-col h-full ${showRightPanel ? 'w-full lg:w-7/10' : 'w-full'} transition-all duration-300 relative`}>
                                                        <div className="flex-1 w-full relative">
                                                            <div className="w-full h-full flex justify-start pl-18 pt-12">
                                                                <div className="grid grid-cols-3 gap-x-12 gap-y-10 w-full max-w-5xl h-fit">
                                                                    {validMainGroups.map((group, idx) => (
                                                                        <div key={idx} className="w-full max-w-52 flex flex-col justify-start gap-4">
                                                                            {group.label && (
                                                                                <h3 className="w-fit text-xl font-semibold leading-7 text-gray-900">
                                                                                    {group.label}
                                                                                </h3>
                                                                            )}
                                                                            <ul className="flex flex-col gap-2">
                                                                                {group.items && group.items.map((link: any, linkIdx: number) => {
                                                                                    const isVerTodas = link.label.toLowerCase().includes("ver todas") || link.label.toLowerCase().includes("ver todos")
                                                                                    return (
                                                                                        <li key={linkIdx}>
                                                                                            <a
                                                                                                href={link.href}
                                                                                                className={`text-sm block transition-all ${isVerTodas ? 'text-[#05BE50] font-bold uppercase mt-2 hover:opacity-80' : 'text-gray-600 hover:text-[#05BE50]'}`}
                                                                                            >
                                                                                                {link.label}
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
                                                        <div className="w-full h-20 shrink-0 flex items-center pl-18 border-t border-gray-200 z-20">
                                                            {bottomGroups.length > 0 ? (
                                                                bottomGroups.map((group, gIdx) => (
                                                                    <div key={gIdx} className="w-fit h-full flex items-center gap-8">
                                                                        {group.items && group.items.map((link: any, lIdx: number) => (
                                                                            <a key={lIdx} href={link.href} className="text-[#05BE50] font-semibold text-md flex justify-start items-center gap-1 transition-transform">
                                                                                {link.label}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                ))
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    {showRightPanel && (
                                                        <div className="hidden lg:block w-3/10 h-full bg-white border-l border-gray-100 z-10 relative">
                                                            {activeCategory.rightPanel!.style === 'card' ? (
                                                                <div className="w-full h-full px-10 pt-13 flex flex-col group/panel cursor-pointer">
                                                                    <div className="w-[85%] h-auto overflow-hidden relative mb-5">
                                                                        {activeCategory.rightPanel!.image && (
                                                                            <img src={activeCategory.rightPanel!.image} alt={activeCategory.rightPanel!.title || ''} className="w-full h-full object-cover transition-transform duration-700 group-hover/panel:scale-110" />
                                                                        )}
                                                                        <div className="absolute inset-0 bg-black/5 group-hover/panel:bg-transparent transition-colors duration-300" />
                                                                    </div>
                                                                    <div className="flex-1 flex flex-col items-start bg-white">
                                                                        {activeCategory.rightPanel!.subtitle && (
                                                                            <span className="text-[#64B4E6] font-bold text-[14px] tracking-widest uppercase mb-1 block">
                                                                                {activeCategory.rightPanel!.subtitle}
                                                                            </span>
                                                                        )}
                                                                        {activeCategory.rightPanel!.title && (
                                                                            <h3 className="text-gray-900 font-semibold text-[20px] leading-Tight w-full mb-7">
                                                                                {activeCategory.rightPanel!.title}
                                                                            </h3>
                                                                        )}
                                                                        {activeCategory.rightPanel!.buttonText && (
                                                                            <a href={activeCategory.rightPanel!.buttonHref} className="px-6 py-2.5 border-2 border-[#05BE50] text-[#05BE50] text-xs font-extra-bold tracking-wider uppercase rounded-[4px] hover:bg-[#05BE50] hover:text-white transition-all duration-300">
                                                                                {activeCategory.rightPanel!.buttonText}
                                                                            </a>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="w-full h-full flex flex-col justify-start items-start px-10 pt-13 relative overflow-hidden group/panel cursor-pointer">
                                                                    {activeCategory.rightPanel!.title && (
                                                                        <h3 className="text-gray-900 font-semibold text-3xl leading-9 mb-10 z-10 relative w-full">
                                                                            {activeCategory.rightPanel!.title}
                                                                        </h3>
                                                                    )}
                                                                    {activeCategory.rightPanel!.buttonText && (
                                                                        <a href={activeCategory.rightPanel!.buttonHref} className="z-10 relative bg-[#05BE50] text-white text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-[4px] hover:bg-[#049c41] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                                                            {activeCategory.rightPanel!.buttonText}
                                                                        </a>
                                                                    )}
                                                                    {activeCategory.rightPanel!.image && (
                                                                        <img src={activeCategory.rightPanel!.image} alt="" className="absolute bottom-0 right-0 w-full h-auto object-contain z-0 transition-transform duration-500 group-hover/panel:translate-y-0 group-hover/panel:translate-x-0" />
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })()}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}

                <div
                    className="absolute top-18 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-12 border-b-white z-60 transition-all duration-300 ease-out pointer-events-none"
                    style={{
                        left: indicatorProps.left,
                        opacity: indicatorProps.opacity,
                        transform: 'translateX(-50%)'
                    }}
                />
            </nav>

            {activeMenu && (
                <div className="fixed top-24 inset-0 bg-black/25 z-30 animate-in fade-in duration-300 pointer-events-none" />
            )}
            {isWhatsappOpen && (
                <div className="fixed top-0 inset-0 bg-black/35 z-30 animate-in fade-in duration-300 " />
            )}
            {isSearchOpen && (
                <div className="fixed top-15 inset-0 bg-white z-30 animate-in fade-in duration-300 flex justify-center ">
                    <div className="w-full max-w-4xl flex items-center gap-10 h-fit">
                        <Lupa className="w-10 h-10 text-gray-400 shrink-0" />
                        <span
                            className="text-[64px] font-light  text-gray-700 pointer-events-none select-none tracking-tight"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            Buscar
                        </span>
                        <input
                            type="text"
                            autoFocus
                            className="w-full absolute opacity-0 h-24 cursor-text"
                        />
                    </div>
                </div>
            )}

            <div className="h-full flex items-center gap-3 2xl:gap-4 relative z-40">
                <div className="flex items-center">
                    {!isSearchOpen && (
                        <>
                            <div className="w-9 h-9 flex items-center justify-center mr-3">
                                <a href="#productos-section" className="h-full flex items-center">
                                    <img className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-out" src="/icons/caja-regalo.webp" alt="Caja de regalo" />
                                </a>
                            </div>

                            <div className="w-6 h-6 flex items-center justify-between relative mr-3">
                                <Popup
                                    trigger={
                                        <button className="cursor-pointer hover:scale-110 transition-transform">
                                            <LogoWhatsapp className="w-6 h-6 text-black" />
                                        </button>
                                    }
                                    position="bottom left"
                                    on="click"
                                    closeOnDocumentClick
                                    onOpen={() => setIsWhatsappOpen(true)}
                                    onClose={() => setIsWhatsappOpen(false)}
                                    contentStyle={{
                                        padding: '0px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                                        width: '290px',
                                        zIndex: 80,
                                        position: 'absolute',
                                        right: '520px',
                                        top: '92px'
                                    }}
                                    arrow={false}
                                    ref={whatsappPopupRef}
                                >
                                    <div className="bg-white px-4 pt-6 pb-4 flex flex-col gap-2 relative rounded shadow-2xl border border-gray-100">
                                        <button
                                            onClick={() => whatsappPopupRef.current?.close()}
                                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full p-1 hover:bg-gray-100"
                                            aria-label="Cerrar"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                                <img src="/hamburger-whatsapp-asistente.png" alt="Asistente Virtual" className="w-full h-full object-cover" />
                                            </div>
                                            <h2 className="text-[#003057] text-xl font-semibold w-3/5 leading-tight">Estamos para ayudarte</h2>
                                        </div>
                                        <div className="w-full border-b border-gray-100 my-2" />
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-0">
                                                <h3 className="text-[#3DB6D6] font-extrabold text-xs tracking-wide uppercase">POR WHATSAPP</h3>
                                                <p className="text-[#5E6D77] text-base">A través de AVI, tu asistente virtual</p>
                                                <div className="flex items-center text-[#05BE50] text-sm font-medium">
                                                    <Reloj className="w-4 h-4 text-[#05BE50] font-bold" />
                                                    <span className="font-normal">Disponible ahora</span>
                                                </div>
                                            </div>
                                            <a href="https://wa.me/51993119000" target="_blank" rel="noopener noreferrer" className="bg-[#05BE50] hover:bg-[#049c41] text-white font-bold text-sm py-3 px-5 rounded-[4px] flex items-center justify-center gap-2 w-fit transition-colors shadow-sm">
                                                <LogoWhatsapp className="w-5 h-5 filter brightness-0 invert" />
                                                <span className="font-semibold">993 119 000</span>
                                            </a>
                                        </div>
                                    </div>
                                </Popup>
                            </div>

                            <div className="w-6 h-6 flex items-center justify-center mr-4">
                                <button onClick={() => setIsSearchOpen(true)} className="cursor-pointer hover:scale-110 transition-transform">
                                    <Lupa className="w-6 h-6 text-black" />
                                </button>
                            </div>
                        </>
                    )}

                    {isSearchOpen && (
                        <>
                            <div className="w-9 h-9 flex items-center justify-center mr-3">
                                <a href="#productos-section" className="h-full flex items-center">
                                    <img className="w-full h-auto" src="/icons/caja-regalo.webp" alt="Caja de regalo" />
                                </a>
                            </div>
                            <div className="w-6 h-6 flex items-center justify-center mr-4">
                                <LogoWhatsapp className="w-6 h-6 text-black" />
                            </div>

                            {/* Divider */}
                            <div className="h-full w-px bg-gray-200"></div>

                            <div className="w-10 h-10 flex items-center justify-center">
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="cursor-pointer transition-transform duration-200 hover:rotate-90"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="h-full w-px bg-gray-200"></div>
                        </>
                    )}

                    <div className="w-fit h-10 flex gap-4 ml-2">
                        <div className="h-full flex items-center group/abre relative">
                            <a href="#" className="h-full flex items-center justify-center gap-2 tracking-wider bg-[#37cb73] text-white uppercase font-semibold text-xs px-4.5 shadow-lg rounded-sm font-['Geometria',sans-serif] min-w-[170px]">
                                Abre tu cuenta
                                <div className="rotate-90 transition-transform duration-200 ease-in-out group-hover/abre:rotate-270">
                                    <Arrow className="w-3 h-3 text-white" />
                                </div>
                            </a>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-full rounded-b bg-white shadow-xl opacity-0 invisible translate-y-2 scale-95 group-hover/abre:opacity-100 group-hover/abre:visible group-hover/abre:translate-y-0 group-hover/abre:scale-100 transition-all duration-200 z-50 border-t border-gray-100 origin-top">
                                <ul className="flex flex-col ">
                                    <li className="border-b border-gray-100 last:border-0">
                                        <a href="#" className="block px-6 py-1.75 hover:bg-gray-50 text-[15px] font-medium transition-colors">
                                            Cuenta Simple
                                        </a>
                                    </li>
                                    <li className="border-b border-gray-100 last:border-0">
                                        <a href="#" className="block px-6 py-1.75 hover:bg-gray-50 text-[15px] font-medium transition-colors">
                                            Cuenta Sueldo
                                        </a>
                                    </li>
                                    <li className="border-b border-gray-100 last:border-0">
                                        <a href="#" className="block px-6 py-1.75 hover:bg-gray-50 text-[15px] font-medium transition-colors">
                                            Cuenta Millonaria
                                        </a>
                                    </li>
                                    <li className="border-b border-gray-100 last:border-0">
                                        <a href="#" className="block px-6 py-1.75 hover:bg-gray-50 text-[15px] font-medium transition-colors">
                                            Cuenta Súper Tasa
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full">
                            <button type="button" className="h-full flex items-center justify-center tracking-wider bg-[#0039a6] hover:bg-[#3361B8] cursor-pointer text-white uppercase font-semibold text-xs px-4.5 shadow-lg rounded-sm font-['Geometria',sans-serif] transition-transform duration-300 ease-in-out">
                                Banca por internet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}